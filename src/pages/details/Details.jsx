import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../shared/navbar/Navbar";
import Footer from "../../shared/footer/Footer";
import { Helmet } from "react-helmet";
import ReviewPage from "../reviews/ReviewPage";
//import Review from "./Review";


const Details = () => {
    const room = useLoaderData();
   
    return (
        <div>
             <Helmet>
                <title>Details</title>
            </Helmet>
            <Navbar></Navbar>

            <div className="max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto py-10" key={room._id}>
                <div className="w-full rounded-md bg-cover bg-center">
                    <div className="w-76 carousel ">
                        {room.images.map((image, index) => (
                            <div className="carousel-item w-full" key={index}>
                                <img src={image} className="w-full" alt={`Carousel Image ${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="ml-3 text-neutral-content">
                    <h1 className="pt-10 text-3xl font-bold text-red-900">
                        {room.description}
                    </h1>
                    <p className="pt-4 text-base font-normal text-red-900">
                        {room.roomSize}
                    </p>
                    {room.availability ? (
                        <p className=" text-base font-normal text-red-900">Availability: Available</p>
                    ) : (
                        <p className=" text-base font-normal text-red-900">Availability: Not Available</p>
                    )}
                    <p className="text-base font-normal text-red-900">Special Offers :{room.specialOffers}</p>
                    <div className="flex justify-between">
                        <p className="text-xl text-red-900 font-semibold">Price: ${room.pricePerNight}</p>
                        <button className="my-6 btn normal-case btn-primary bg-red-900 text-white border-none" ><Link to={`/book/${room._id}`}>  Book Now</Link>
                          
                        </button>
                    </div>
                </div>
            </div>
            {/* <ReviewPage></ReviewPage> */}
            {/* <Review service_id={room._id} ></Review> */}
            <Footer></Footer>
        </div>
    );
};

export default Details;