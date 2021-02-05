import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => (
  <div className="navbar navbar-light bg-transparent shadow-sm">
    <div className="container d-flex justify-content-between">
      <Link to="/">
        <strong>epochs.app</strong>
      </Link>
    </div>
  </div>
);
