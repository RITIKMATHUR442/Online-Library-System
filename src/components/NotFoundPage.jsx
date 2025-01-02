import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <h2>Page Not Found</h2>
      <Link to="/">Go Back to Home</Link>
    </div>
  );
}

export default NotFoundPage;
