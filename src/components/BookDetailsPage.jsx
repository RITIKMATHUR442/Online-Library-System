import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './BookDetailsPage.css';
import React from "react";

function BookDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = useSelector((state) => state.books.books.find((book) => book.id === parseInt(id)));

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    
    <div className="book-details">
      <h5>id:{book.id}</h5>
      <h2>{book.title}</h2>
      <h3 className="animated-text">{book.author}</h3>
      <p>Category: {book.category}</p>
      <p>Published: {book.publishYear}</p>
      <p>{book.description}</p>
      <p className="rating">Rating: {book.rating}</p>
      <button onClick={() => navigate('/browse-books')}>Back to Browse</button>
      <button onClick={()=>navigate('/')}>home-button</button>
    </div>
  );
}

export default BookDetailsPage;
