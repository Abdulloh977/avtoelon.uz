import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "../../companets/heaader/header";
import { Footer } from "../../companets/footer/footer";
import "./categoryList.css"; 

const CategoryList = () => {
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://avtoelon.onrender.com/category/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log("Fetched data:", data);
        if (data.category && data.category.length > 0) {
          setCategoryData(data.category[0]);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error("Xato:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div class="wave-container">
    <h1 class="wave-text">
      <span>L</span><span>o</span><span>a</span><span>d</span><span>i</span><span>n</span><span>g</span><span>.</span><span>.</span><span>.</span>
    </h1>
  </div>;

  if (!categoryData) return <p>Ma'lumot topilmadi</p>;

  return (
    <>
      <Header />
      <div className="category-page">
        <div className="category-banner">
          
          <div className="banner-content">
            <img className="category-image" width={220} height={150} src={categoryData.image.url} alt={categoryData.title} />
            <h2 className="category-title">{categoryData.title}</h2>
          </div>
        </div>

        
        <div className="cars-list">
          {categoryData.cars.length > 0 ? (
            categoryData.cars.map((car) => (
              <Link to={`/car/${car._id}`} className="car-card" key={car._id}>
                <img className="car-image" src={car.image.url} alt={car.title} />
                <h3 className="car-title">{car.title}</h3>
                <p className="car-price">{car.price}$</p>
                <p>{car.year}</p>
                <p>{car.location}</p>
                <div className="author-info">
                  <img className="author-avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLFeF4nKft1sf4uulK3n0K5flDIRmUMKJ7Kw&s" alt="author"  width={30} height={30}/>
                  <div className="akkount">
                    <p>Author Name</p>
                    <p>author@gmail.com</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>Bu kategoriyada mashinalar yo'q</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CategoryList;
