

const ReviewCard = ({review}) => {
    const{customerName,ratings}=review;
    return (
        <div>
            <div  className="card w-96  text-primary-content">
                    <div className="card-body">
                      <h2 className="card-title">{customerName}</h2>
                      <p>{ratings}</p>
                      <div className="card-actions justify-end">
                        <button className="btn">Buy Now</button>
                      </div>
                    </div>
                  </div>
        </div>
    );
};

export default ReviewCard;