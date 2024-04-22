import React from "react";
import "./navpages.scss";
import { Link } from "react-router-dom";
export const NavPages = () => {
  return (
    <div className="NavPages">
      <div className="container">
        <Link to={"/dashboard"} className="link">
          <span>Dashboard</span>
        </Link>
        <Link to={"/dashboard/customers"} className="link">
          <span>Customers</span>
        </Link>
        <Link to={"/dashboard/drivers"} className="link">
          <span>Drivers</span>
        </Link>
      </div>
    </div>
  );
};
