import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/bookSlice';
import { useNavigate } from 'react-router-dom';
import './AddBookPage.css';
import React from "react";

function AddBookPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [rating, setRating] = useState("");
  const [publishYear, setPublishYear] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: Date.now(),
      title,
      author,
      description,
      category,
      rating: parseFloat(rating),
      publishYear // Ensure publishYear is included
    };

    dispatch(addBook(newBook));
    navigate("/browse-books");
  };

  return (
    <div className="add-book-page">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>Select Category</option>
          <option value="Fiction">Fiction</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Non-Fiction">Non-Fiction</option>
        </select>
        <input
          type="number"
          placeholder="Publish Year"
          value={publishYear}
          onChange={(e) => setPublishYear(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          required
        />
        <button type="submit">Add Book</button>
      </form>
      {showPopup && <div className="popup">Book added successfully!</div>}
    </div>
  );
}

export default AddBookPage;