

const ReviewCard = ({review}) => {
    const{customerName,ratings,comment}=review;
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 ml-2 mb-4">
            <div  className="card bg-slate-300 w-96  text-red-900">
                    <div className="card-body">
                      <h2 className="">Customer Name:{customerName}</h2>
                      <p>Rating:{ratings}</p>
                      <p>Feedback:{comment}</p>
                    </div>
                  </div>
        </div>
    );
};

export default ReviewCard;