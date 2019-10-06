import React from "react";

export default function NotFound() {
  return (
    <div>
      <h2 className="display: -4">
        <i style={{ color: "red" }} className="fas fa-hippo"></i> 404 Page Not
        Found
      </h2>
      <p className="lead">
        Oops, the page you looking for does not exist{" "}
        <i style={{ color: "blue" }} className="far fa-surprise"></i>
      </p>
      <p className="lead">Please make sure to type the URL correctly</p>
    </div>
  );
}
