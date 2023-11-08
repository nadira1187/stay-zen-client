import { useLoaderData } from "react-router-dom";
import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";
import ReviewCard from "./ReviewCard";
import { Helmet } from "react-helmet";


const ReviewPage = () => {
    const reviews=useLoaderData([]);
    //const {service_id}=reviews[0];
   // console.log(reviews)
    //console.log(service_id);
    return (
        <div>
             <Helmet>
                <title>Review</title>
            </Helmet>
            <Navbar></Navbar>
            <h2 className="text-xl lg:text-4xl text-red-900 font-mono text-center my-5">Reviews On This Room</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 ml-0 lg:ml-2 mb-4" >
            {
                reviews?
                (reviews.map((review)=>{
                   return <ReviewCard 
                    key={review.service_id}
                    review={review}
                    ></ReviewCard>
                })
                ):
                (
                    <p>Loading.</p>
                  )

            }
            </div>
      
<Footer></Footer>
        </div>
    );
};

export default ReviewPage;