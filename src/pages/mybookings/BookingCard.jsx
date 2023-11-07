import { Link } from "react-router-dom";


const BookingCard = ({booking,handleDelete}) => {
    const {_id,images ,service,price}=booking;
    return (
        <div className="mb-5 mt-5">
            <div className="card card-compact w-92 lg:w-96 bg-base-100 shadow-xl">
  <figure>
  <div className="w-72 lg:w-80  carousel ">
                {images.map((image, index) => (
        <div className="carousel-item w-full" key={index}>
          <img src={image} className="w-full" alt={`Carousel Image ${index}`} />
        </div>
      ))}
            </div>
    </figure>
  <div className="card-body">
    <h2 className="">{service}</h2>
    <p>{price}</p>
    <div className="card-actions justify-evenly">
      <button  className="btn bg-red-900 text-white normal-case"><Link to={`/updatebooking/${_id}`}>Update Booking</Link></button>
      <button onClick={()=>handleDelete(_id)} className="btn bg-red-900 text-white normal-case">Cancel Booking</button>
      <button className="btn bg-red-900 text-white normal-case"><Link to={`/addreview/${_id}`}>Add an Review</Link></button>
    </div>
    
    
  </div>
</div>
        </div>
    );
};

export default BookingCard;