import React, {useState, useEffect} from 'react';
import axios from 'axios';
 
const Aboutus = () => {
  const [reviews, setReviews] = useState([]);
 
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:5043/api/Reviewes');
       
 
        setReviews(response.data);
        console.log(response.data);
       
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };
 
    fetchReviews();
  }, []);
 
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Customer Reviews</h1>
      <ul>
        {reviews.map((review, index) => (
          <li key={index} className="border p-4 mb-4">
            <p className="text-lg font-semibold">Customer: {review.Customer.Name}</p>
            <p>Date: {review.date}</p>
            <p>Time: {review.time}</p>
            <p>Review: {review.Reviews}</p>
            <p>gourav</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
 
export default Aboutus;