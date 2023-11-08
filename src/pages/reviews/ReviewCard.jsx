const ReviewCard = ({ review }) => {
  console.log(review)
  return (
    <div>
        {/* <h2 className="text-4xl"> reviews:{review.length}</h2> */}
        <div className="grid grid-cols-1 lg:grid-cols-3 ml-2 mb-4">
          <div className="card bg-slate-300 w-96 text-red-900">
              <div className="card-body">
                  {review ? (
                      <>

                          <h2 className="">Customer Name: {review.customerName}</h2>
                          <p>Rating: {review.ratings}</p>
                          <p>Feedback: {review.comment}</p>
                      </>
                  ) : (
                      <p className="text-4xl">No reviews available</p>
                  )}
              </div>
          </div>
      </div>
    </div>
     
  );
};

export default ReviewCard;
