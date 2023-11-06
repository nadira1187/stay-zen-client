

const BookingCard = ({booking}) => {
    const {images ,service,price}=booking;
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure>
  <div className="w-76 carousel ">
                {images.map((image, index) => (
        <div className="carousel-item w-full" key={index}>
          <img src={image} className="w-full" alt={`Carousel Image ${index}`} />
        </div>
      ))}
            </div>
    </figure>
  <div className="card-body">
    <h2 className="card-title">{service}</h2>
    <p>{price}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Update Booking</button>
      <button className="btn btn-primary">Delete Booking</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default BookingCard;