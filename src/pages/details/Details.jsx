import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../shared/navbar/Navbar";
import Footer from "../../shared/footer/Footer";
import { Helmet } from "react-helmet";
//import ReviewPage from "../reviews/ReviewPage";
import { useEffect, useState } from "react";
import ReviewCard from "../reviews/ReviewCard";
//import Review from "./Review";


const Details = () => {
    const room = useLoaderData();
    const { _id } = room;
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch(`https://stay-zen-server.vercel.app/review/${_id}`)
            .then((res) => res.json())
            .then((data) => setReview(data))

    }, [_id])
    console.log(review)

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
                    <p className="pt-4 text-xl font-medium  text-red-900">
                    Size Of Our Room:    {room.roomSize}
                    </p>
                    {room.availability ? (
                        <p className=" text-xl font-medium text-red-900">Availability: Available</p>
                    ) : (
                        <p className=" text-xl font-medium text-red-900">Availability: Not Available</p>
                    )}
                    <p className="text-xl font-medium text-red-900">
                        {room.specialOffers ? `Special Offers: ${room.specialOffers}` : 'No offers available'}
                    </p>

                    <div className="flex justify-between">
                        <p className="text-xl text-red-900 font-semibold">Price: ${room.pricePerNight}</p>
                        <button className="my-6 btn normal-case btn-primary bg-red-900 text-white border-none" ><Link to={`/book/${room._id}`}>  Book Now</Link>

                        </button>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-xl md:text-4xl text-red-900 font-mono text-center">Reviews On This Room</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 ml-0 md:ml-2 my-4">
                    {
                        review ?
                            (review.map((reviews) => {
                                return <ReviewCard
                                    key={review.service_id}
                                    review={reviews}
                                ></ReviewCard>
                            })
                            ) :
                            (
                                <p className="text-3xl font-medium text-red-900">No Reviews Available</p>
                            )

                    }
                </div>
            </div>
            {/* <ReviewPage></ReviewPage> */}
            {/* <Review id={room._id} ></Review> */}
            <Footer></Footer>
        </div>
    );
};

export default Details;