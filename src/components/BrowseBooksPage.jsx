import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import './BrowseBooksPage.css';
import React from "react";

function BrowseBooksPage() {
  const { category } = useParams();
  const books = useSelector((state) => state.books.books);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter((book) => {
    const matchesCategory = category ? book.category === category : true;
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase()) || book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="browse-books-page">
      <input 
        type="text" 
        placeholder="Search by title or author" 
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="search-input"
      />
      <div className="book-list">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.category}</p>

            <div className="book-genres">
              {book.genre && book.genre.map((gen, index) => <span key={index}>{gen}</span>)}
            </div>
            <Link to={`/book-details/${book.id}`}>View Details</Link>

          </div>
        ))}
      </div>
    </div>
  );
}

export default BrowseBooksPage;