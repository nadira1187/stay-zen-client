import { useEffect, useState } from "react";
import Navbar from "../../shared/navbar/Navbar";
import RoomCard from "./RoomCard";
import Footer from "../../shared/footer/Footer";

const Rooms = () => {
    const [rooms,setRooms] =useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/rooms")
        .then(res => res.json())
        .then(data => setRooms(data))
    })
    return (
        <div>
            <Navbar></Navbar>
           <div className="mt-4 ml-0 lg:ml-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    rooms.map(room => <RoomCard
                        key={room._id}
                        room={room}
                    ></RoomCard>)
                }
            </div>
        </div>

          <Footer></Footer>  
        </div>
    );
};

export default Rooms;