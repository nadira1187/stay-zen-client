import { useEffect, useState } from "react";
import Navbar from "../../shared/navbar/Navbar";
import RoomCard from "./RoomCard";
import Footer from "../../shared/footer/Footer";
import { Helmet } from "react-helmet";

const Rooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        fetch("https://stay-zen-server.vercel.app/rooms")
            .then((res) => res.json())
            .then((data) => setRooms(data));
    }, []);
console.log(rooms)
    const handleAsc = () => {
        const sortedRooms = rooms.slice().sort((a, b) => a.pricePerNight - b.pricePerNight);
        setRooms(sortedRooms);
    };

    const handleDesc = () => {
        const sortedRooms = rooms.slice().sort((a, b) => b.pricePerNight - a.pricePerNight);
        setRooms(sortedRooms);
    };

    return (
        <div>
             <Helmet>
                <title>Rooms</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="mt-4 ml-0 lg:ml-4">

                <button className="btn btn-primary text-white mr-2 normal-case bg-red-900 border-none" onClick={handleAsc}>
                    Sort by Price (Low to High)
                </button>
                <button className="btn text-white btn-primary bg-red-900 normal-case border-none" onClick={handleDesc}>Sort by Price (High to Low)</button>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rooms.map((room) => (
                        <RoomCard key={room._id} room={room}></RoomCard>
                    ))}
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Rooms;
