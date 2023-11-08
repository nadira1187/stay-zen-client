import { useEffect, useState } from "react";


const Review = ({id}) => {
    const [review,setReview]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/review/${id}`)
        .then((res)=>res.json())
        .then((data)=>setReview(data))

    },[id])
    //console.log(id)
   console.log(review);
    return (
        <div>
            
        </div>
    );
};

export default Review;