const ReviewCard = ({ review }) => {
  console.log(review)
  return (
    
        <div  >
          <div className="card bg-slate-300 w-80 md:w-96 text-red-900">
              <div className="card-body">
                  {review ? (
                      <>

                          <h2 className="">Customer Name: {review.customerName}</h2>
                          <p>Rating: {review.ratings}</p>
                          <p>Feedback: {review.comment}</p>
                      </>
                  ) : (
                    <p className="text-3xl font-medium text-red-900">No Reviews Available</p>
                  )}
              </div>
          </div>
      </div>
  
     
  );
};

export default ReviewCard;
