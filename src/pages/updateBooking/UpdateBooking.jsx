import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../components/provider/AuthProvider";
import swal from "sweetalert";
import Navbar from "../../shared/navbar/Navbar";


const UpdateBooking = () => {
    const booking = useLoaderData([]);
    console.log(booking)
    const {service,_id}=booking;
    const {user}=useContext(AuthContext);
    const handleUpdateBooking = event =>{
      
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName: name, 
            email, 
             date, 
        }

        console.log(booking);

        fetch(`http://localhost:5000/bookings/${_id}`, {
            method: 'PUT', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                swal('Your booking updated successfully')
            }
        })

    }
    return (
        <div>
            <Navbar></Navbar>
              <div className="p-4">
        <h2 className='text-center text-3xl'>Update booking: {service} </h2>
        <form onSubmit={handleUpdateBooking}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} name="name" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name="date" className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name="email" defaultValue={user?.email} placeholder="email" className="input input-bordered" />
                </div>
            </div>
            <div className="form-control mt-6">
                <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
            </div>
        </form>
        <div className="card-body">

        </div>
    </div>
        </div>
      
    );
};

export default UpdateBooking;