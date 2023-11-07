import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";
import Navbar from "../../shared/navbar/Navbar";
import BookingCard from "./BookingCard";
import swal from "sweetalert";
import Swal from "sweetalert2";
import Footer from "../../shared/footer/Footer";
//import useAxios from "../../hooks/useAxios";


const MyBookings = () => {
    const {user} =useContext(AuthContext);
    const [bookings,setBookings]=useState([]);
   // const axiosSecure=useAxios();
    const url=`http://localhost:5000/booking?email=${user?.email}`;
    useEffect(()=>{
        fetch(url,{credentials:"include"})
        .then(res => res.json())
        .then(data=>{
            setBookings(data);
           // console.log(bookings)
        })
        // axiosSecure.get(url)
        // .then(res=>{
        //     setBookings(res.data);
        //     console.log(bookings);
        // })
    },[]);
    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result)=>{
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookingss/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            swal('deleted successful');
                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining);
                        }
                    })
            }
        })
       
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
     {
         bookings?
       ( bookings.map((booking)=>(
        <BookingCard key={booking._id}
        booking={booking}
        handleDelete={handleDelete}
        >
            {booking.description}</BookingCard>
       )
          ))
       :(
        <p>Loading.</p>
      )
      }</div>
           <Footer ></Footer> 
        </div>
    );
};

export default MyBookings;