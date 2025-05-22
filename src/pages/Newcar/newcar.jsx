import React, { useState } from 'react';
import "./newcar.css";
import { Header } from '../../companets/heaader/header';
import { Footer } from '../../companets/footer/footer';
import { useCarContext } from '../../context/carContaxt';
import { useAuthContext } from '../../context/AuthContext';

function Add() {
  const { addCar } = useCarContext();
  const { currentUser } = useAuthContext();

  const [formData, setFormData] = useState({
    title: '',
    year: '',
    price: '',
    carClass: '',
    location: '',
    description: '',
    image: null,
    category: '',
  });

  // Muvaffaqiyat xabari uchun state
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === 'file') {
      const file = files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData(prev => ({ ...prev, image: reader.result }));
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser) {
      alert("Please log in to add a car.");
      return;
    }

    try {
      const newCar = {
        ...formData,
        userEmail: currentUser.email,
      };

      await addCar(newCar);

      // Muvaffaqiyat xabarini ko‘rsatish
      setSuccessMessage("Car successfully added!");

      // Formni tozalash
      setFormData({
        title: '',
        year: '',
        price: '',
        carClass: '',
        location: '',
        description: '',
        image: null,
        category: '',
      });

      // Sahifani yuqoriga scroll qilish
      window.scrollTo({ top: 0, behavior: 'smooth' });

      // 3 soniyadan keyin xabarni yashirish
      setTimeout(() => setSuccessMessage(''), 3000);
    } catch (error) {
      console.error("Failed to add car:", error);
      alert("Failed to add car, please try again.");
    }
  };

  return (
    <>
      <Header />
      <form className="car-form" onSubmit={handleSubmit}>
        <h2 className="car-form__title">Add a New Car</h2>

        {/* Success message */}
        {successMessage && <div className="success-message">{successMessage}</div>}

        <div className="car-form__fields">
          <div className="car-form__column">
            <label className="car-form__label">Title</label>
            <input className="car-form__input" name="title" value={formData.title} onChange={handleChange} required />

            <label className="car-form__label">Price</label>
            <input
              type="number"
              className="car-form__input"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />

            <label className="car-form__label">Location</label>
            <input className="car-form__input" name="location" value={formData.location} onChange={handleChange} />

            <label className="car-form__label">Image</label>
            <input className="car-form__file" name="image" type="file" accept="image/*" onChange={handleChange} />
          </div>

          <div className="car-form__column">
            <label className="car-form__label">Year</label>
            <input
              type="number"
              className="car-form__input"
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            />

            <label className="car-form__label">Class</label>
            <input className="car-form__input" name="carClass" value={formData.carClass} onChange={handleChange} />

            <label className="car-form__label">Description</label>
            <input className="car-form__input" name="description" value={formData.description} onChange={handleChange} />

            <label className="car-form__label">Category</label>
            <select className="car-form__select" name="category" value={formData.category} onChange={handleChange} required>
              <option value="">Choose one category...</option>
              <option value="659495abd24370b32b87d299">Byd</option>
              <option value="659495b9d24370b32b87d29a">Mercedes</option>
              <option value="659495c2d24370b32b87d29b">Kia</option>
              <option value="659495cad24370b32b87d29c">Porsche</option>
              <option value="659495d5d24370b32b87d29d">Audi</option>
            </select>
          </div>
        </div>
        <button type="submit" className="car-form__submit">Add Car</button>
      </form>
      <Footer />
    </>
  );
}

export default Add;
