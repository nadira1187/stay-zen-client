import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../components/provider/AuthProvider";
import swal from "sweetalert";
import Navbar from "../../shared/navbar/Navbar";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";


const BookRoom = () => {

    const room = useLoaderData([]);
    const { description, pricePerNight, images, _id, availability } = room;
    const { user } = useContext(AuthContext);
    const handleBookService = event => {

        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name,
            email,
            images,
            date,
            availability,
            service: description,
            service_id: _id,
            price: pricePerNight,
        }

        console.log(booking);

        Swal.fire({
            title: "Booking Details",
            html: `
                <strong>Name:</strong> ${name}<br>
                <strong>Date:</strong> ${date}<br>
                <strong>Email:</strong> ${email}<br>
                <strong>RoomType:</strong> ${description}<br>
                <strong>Due amount:</strong> $${pricePerNight}
            `,
            showCancelButton: true,
            confirmButtonText: "Confirm",
            cancelButtonText: "Cancel",
        }).then((result) => {
            if (result.isConfirmed) {
                // User confirmed the booking, proceed to create the booking
                fetch("http://localhost:5000/bookings", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(booking),
                })
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        const newAvailability = availability - 1;
                        fetch(`http://localhost:5000/roomss/${_id}`, {
                            method: "PATCH",
                            headers: {
                                "content-type": "application/json",
                            },
                            body: JSON.stringify({ availability: newAvailability }),
                        })
                        .then((res) => res.json())
                        .then((updatedData) => {
                            if (updatedData.modifiedCount > 0) {
                                swal("Room booked successfully");
                            }
                        });
                    }
                });
            }
        });


    }
    return (
        <div>
            <Helmet>
                <title>Book Room</title>
            </Helmet>
            <Navbar></Navbar>
           
            <div className="p-4">
                <h2 className='text-center text-3xl font-mono font-bold text-red-900'>Book Service: {description} </h2>
                <form onSubmit={handleBookService}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" defaultValue={user?.displayName} name="name" className="input input-accent input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-accent input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-accent input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due amount</span>
                            </label>
                            <input type="text" defaultValue={'$' + pricePerNight} className="input input-accent input-bordered" />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary bg-red-900 border-none text-white normal-case btn-block" type="submit" value="Book Room" />
                    </div>
                </form>
                <div className="card-body">

                </div>
            </div>
        </div>

    );
};

export default BookRoom;