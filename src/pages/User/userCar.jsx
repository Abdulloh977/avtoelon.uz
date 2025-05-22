import { Link } from "react-router-dom";
import { useCarContext } from "../../context/carContaxt";
import { useAuthContext } from "../../context/AuthContext";
import './userCar.css';

const UserCars = () => {
  const { cars } = useCarContext();
  const { currentUser } = useAuthContext();

  // currentUser hali yuklanmagan bo‘lishi mumkin
  if (!currentUser) {
    return <p className='settings-may-ckar-h1'>You don't have cars</p>; 
  }

  // Faqat userning mashinalarini ko‘rsatish
  const userCars = cars.filter(car => car.userEmail === currentUser.email);

  return (
    <div className="user-cars">
      {userCars.length === 0 ? (
        <h3 className='settings-may-ckar-h1'>You don't have cars</h3>
      ) : (
        <ul className='settings-ul'>
          {userCars.map((car) => (
            <div className='settings-may-ckar-div2' key={car._id}>
              <Link to={`/car/${car._id}`}>
                <div className="settings-gemal">
                  <img
                    className="settings-gemal-img"
                    src={car.image?.url}
                    width={100}
                    height={60}
                    alt="car"
                  />
                  <div className='settings-div'>
                    <p className="settings-div-p1">{car.title}</p>
                    <p className="settings-div-p2">{car.price}$</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserCars;
