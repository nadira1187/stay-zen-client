import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../components/provider/AuthProvider";
import Navbar from "../../shared/navbar/Navbar";
import BookingCard from "./BookingCard";
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
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
     {
         bookings?
       ( bookings.map((booking)=>(
        <BookingCard key={booking._id}
        booking={booking}>
            {booking.description}</BookingCard>
       )
          ))
       :(
        <p>Loading.</p>
      )
      }</div>
            
        </div>
    );
};

export default MyBookings;