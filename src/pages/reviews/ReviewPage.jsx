import { useLoaderData } from "react-router-dom";
import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";
import ReviewCard from "./ReviewCard";


const ReviewPage = () => {
    const reviews=useLoaderData([]);
    const {service_id}=reviews[0];
    console.log(reviews)
    console.log(service_id);
    return (
        <div>
            <Navbar></Navbar>
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
      
<Footer></Footer>
        </div>
    );
};

export default ReviewPage;