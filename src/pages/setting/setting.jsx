import React, { useState } from 'react';
import './setting.css';
import { Footer } from '../../companets/footer/footer';
import { Header } from '../../companets/heaader/header';
import { Link, useNavigate } from 'react-router-dom';
import { useCarContext } from '../../context/carContaxt';
import EditModal from '../modul/modul'; 
import UserCars from '../User/userCar';

const Setting = () => {
  const { cars } = useCarContext();
  const navigate = useNavigate();

  // User ma'lumotlari (shu yerga _id ni qo‘shdik)
  const [user, setUser] = useState({
    _id: "65945d02ea9bf11f7071344c", // Token yoki backenddan olinadigan user ID
    firstName: "Abdulloh",
    lastName: "Rahmonov",
    email: "rahmonovabdulloh55@gmail.com"
  });

  // Userga tegishli mashinalarni filtrlash
  const userCars = Array.isArray(cars) 
    ? cars.filter(car => car.author === user._id)
    : [];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = () => {
    navigate('/login');
  };

  const handleSave = (updatedUser) => {
    setUser(prev => ({ ...prev, ...updatedUser }));
    setIsModalOpen(false);
    navigate("/settings");
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="profile-card">
          <div className="profile-image">👤</div>
          <h2>{user.firstName} {user.lastName}</h2>
          <p className="role">user</p>
          <p className="email">{user.email}</p>
          <p className="date">Joined on 21.04.2025</p>
          <div className="buttons">
            <button className="logout" onClick={handleLogout}>Logout</button>
            <button className="edit" onClick={() => setIsModalOpen(true)}>Edit</button>
          </div>
        </div>

        <div className="cars-section">
          <div className="cars-header">
            <h2>User's Cars</h2>
            <Link to="/Add" className="add-btn">+</Link>
          </div>

         <UserCars />
        </div>
      </div>

      <EditModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
        user={user}
      />

      <Footer />
    </>
  );
};

export default Setting;
