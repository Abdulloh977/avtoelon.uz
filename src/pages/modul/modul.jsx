import React, { useState } from 'react';
import './modul.css'; 

const EditModal = ({ isOpen, onClose, onSave, user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [file, setFile] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = () => {
    onSave({ firstName, lastName, email, file });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Edit {user.firstName}'s info</h2>
        <input
          type="text"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          placeholder="First Name"
        />
        <input
          type="text"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="file"
          onChange={e => setFile(e.target.files[0])}
        />
        <div className="button-group">
          <button className="close-btn" onClick={onClose}>Close</button>
          <button className="save-btn" onClick={handleSubmit}>Save changes</button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
