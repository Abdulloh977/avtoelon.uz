import { useParams } from "react-router-dom";
import { useCarContext } from "../../context/carContaxt";
import { Header } from "../../companets/heaader/header";
import { Footer } from "../../companets/footer/footer";
import { useState } from "react";
import "./carbuy.css";

const SingleCar = () => {
  const { id } = useParams();
  const { cars, loading } = useCarContext();
  const [newComment, setNewComment] = useState(""); 
  const [localComments, setLocalComments] = useState([]); 

  if (loading) {
    return (
      <>
        <Header />
        <div className="loading">Loading...</div>
        <Footer />
      </>
    );
  }

  const car = cars.find((car) => car._id.toString() === id.toString());

  if (!car) {
    return (
      <>
        <Header />
        <div className="loading">Car not found.</div>
        <Footer />
      </>
    );
  }

  const handleCommentSubmit = () => {
    if (newComment.trim() === "") return; 

    const commentObject = {
      _id: Date.now(), 
      content: newComment,
      createdAt: new Date(),
    };

    setLocalComments([...localComments, commentObject]);
    setNewComment(""); 
  };

  return (
    <>
      <Header />
      <div className="singlecar-container">
        <div className="singlecar-card">
          <div className="singlecar-content">
            <img
              src={car.image?.url}
              alt={car.title}
              className="singlecar-image"
            />
            <div className="singlecar-info">
              <h1 className="heading_title">{car.title}</h1>
              <p className="pragrf_year">{car.year} • ${car.price} • {car.location || "Location unknown"}</p>
              <p className="decrepshin">{car.description || "No description available"}</p>

              <div className="singlecar-author">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                  alt="author"
                  className="author-image"
                />
                <div>
                  <h4>{car.author?.firstname} {car.author?.lastname}</h4>
                  <p>{car.author?.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="singlecar-card">
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

          
          {localComments.map((comment) => (
            <div key={comment._id} style={{ marginBottom: "10px" }}>
              <p className="text_one">{comment.content}</p>
              <small>{new Date(comment.createdAt).toLocaleString()}</small>
            </div>
          ))}

          <form className="comment-form" onClick={handleCommentSubmit}>
            <textarea
              className="text_sumbit"
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <button className="btn_submit" onClick={handleCommentSubmit}>Submit Comment</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SingleCar;
