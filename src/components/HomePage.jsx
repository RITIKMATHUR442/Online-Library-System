import { Link } from 'react-router-dom';
import './HomePage.css';

import React from "react";

function HomePage() {
  return (
    <div className="home-page">
      <h1>Welcome to the Online Library</h1>
      <div className="categories">
        <h2>Book Categories</h2>
        <ul>
          <li><Link to="/books/Fiction">Fiction</Link></li>
          <li><Link to="/books/Non-Fiction">Non-Fiction</Link></li>
          <li><Link to="/books/Sci-Fi">Sci-Fi</Link></li>
        </ul>
      </div>

      <h2>Popular Books</h2>
      <ul>
        <li>
          <Link to="/book-details/1">The Great Gatsby</Link>
        </li>
        <li>
          <Link to="/book-details/2">1984</Link>
        </li>
        <li>
          <Link to="/book-details/3">Pride and Prejudice</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
