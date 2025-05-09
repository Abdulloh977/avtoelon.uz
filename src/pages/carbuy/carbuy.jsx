import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../companets/heaader/header";
import { Footer } from "../../companets/footer/footer";


const SingleCar = () => {
  const { id } = useParams(); 
  const [car, setCar] = useState(null);

  useEffect(() => {
    const fetchCar = async () => {
      try {
        const { data } = await axios.get(`/api/cars/${id}`);
        setCar(data.car);
      } catch (error) {
        console.error("Car fetch error:", error);
      }
    };

    fetchCar();
  }, [id]);

  

  return (
    <>
    <Header />
    <div className="car-details">
      {/* Car Image */}
      {car?.image?.url ? (
          <img src={car.image.url} alt={car.title} style={{ width: "100%", maxWidth: "600px" }} />
        ) : (
            <p>No image available</p>
        )}

      {/* Car Info */}
      <div className="car-info">
        <h1>{car?.title}</h1>
        <p>
          {car.year} &nbsp; 
          ${car.price} &nbsp;
          {car.location || "Location unknown"}
        </p>
        <p>{car.description || "No description available"}</p>

        {/* Author Info */}
        <div className="author-info">
          <h4>Author: {car.author?.firstname} {car.author?.lastname}</h4>
          <p>Email: {car.author?.email}</p>
        </div>
      </div>

      {/* Comments */}
      <div className="comments">
        <h2>Comments</h2>
        {car.comments && car.comments.length > 0 ? (
            car.comments.map((comment) => (
                <div key={comment._id} style={{ marginBottom: "10px" }}>
              <p>{comment.content || "No comment text"}</p>
              <small>{new Date(comment.createdAt).toLocaleString()}</small>
            </div>
          ))
        ) : (
            <p>No comments yet.</p>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default SingleCar;
