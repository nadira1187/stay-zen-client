import { Link } from "react-router-dom";


const RoomCard = ({room}) => {
    const{images,description,pricePerNight,_id}=room;
    return (
        <div className="mb-5 mt-5">
            
            <div className="card card-compact w-92 bg-base-100 shadow-xl">
                <figure>
                    <Link to={`/details/${_id}`}>
                <div className="w-76 carousel ">
                {images.map((image, index) => (
        <div className="carousel-item w-full" key={index}>
          <img src={image} className="w-full" alt={`Carousel Image ${index}`} />
        </div>
      ))}
            </div>
            </Link>
              </figure>
                <div className="card-body">
                    <h2 className="card-title">{description}</h2>
                    <p className="text-xl">Price:${pricePerNight}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary bg-red-900 border-red-900 normal-case"><Link to={`/book/${_id}`}>Book Now</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;