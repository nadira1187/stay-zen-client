import { useLoaderData } from "react-router-dom";
import Footer from "../../shared/footer/Footer";
import Navbar from "../../shared/navbar/Navbar";
import swal from "sweetalert";


const AddReviews = () => {
    const booking =useLoaderData([]);
    const {service,_id,customerName,service_id}=booking;
    const handleAddReview=event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const ratings=form.ratings.value;
        const days=form.days.value;
        const comment=form.comment.value;
        const reviews={
            customerName:name,_id,
            days,service,ratings,comment,service_id,
        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(reviews)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                swal('Review added successfully')
            }
        })
    }
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-4xl text-red-900 text-center mt-4 mb-4">Add an review:{service }</h2>
            <form onSubmit={handleAddReview} >
            <div className="  flex flex-col gap-4  justify-center items-center mb-5">
                <input type="text" name="name" defaultValue={customerName} className="input input-bordered input-secondary w-full max-w-xs" />
                <input type="text" name="ratings" placeholder="Add Rating" className="input input-bordered input-secondary w-full max-w-xs" />
                <input type="text" name="days" placeholder="Days you stayed" className="input input-bordered input-secondary w-full max-w-xs" />
                <textarea name="comment" placeholder="Your comment" className="textarea textarea-secondary textarea-md w-full max-w-xs" ></textarea>
                <input className="btn btn-primary bg-red-900 border-none btn-wide text-white normal-case" type="submit" value="Add Review" />
            </div>
            </form>
            <Footer></Footer>
        </div>
    );
};

export default AddReviews;