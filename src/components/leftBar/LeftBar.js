import React from "react";
import "./LeftBar.scss";
import { Link, useLocation } from "react-router-dom";
import dashboardIamge from "../../assets/8899687.png";
import customerdIamge from "../../assets/4814852.png";
import driverdIamge from "../../assets/8583437.png";

export const LeftBar = () => {
  const location = useLocation();
  console.log(location.pathname);

  return (
    <div className="LeftBar">
      <Link to="/dashboard" className="link">
        <div
          className={
            location.pathname === "/dashboard" ? "item active" : "item"
          }
        >
          <img src={dashboardIamge} alt="" />
          <span>dashboard</span>
        </div>
      </Link>
      <Link to="/dashboard/customers" className="link">
        <div
          className={
            location.pathname === "/dashboard/customers" ||
            location.pathname === "/dashboard/customerUpdate"
              ? "item active"
              : "item"
          }
        >
          <img src={customerdIamge} alt="" />
          <span>customers</span>
        </div>
      </Link>
      <Link to="/dashboard/drivers" className="link">
        <div
          className={
            location.pathname === "/dashboard/drivers" ||
            location.pathname === "/dashboard/driverUpdate"
              ? "item active"
              : "item"
          }
        >
          <img src={driverdIamge} alt="" />
          <span>Trucker</span>
        </div>
      </Link>
      <Link to="/dashboard/aprovedtrucker" className="link">
        <div
          className={
            location.pathname === "/dashboard/aprovedtrucker" ||
            location.pathname === "/dashboard/driverUpdate"
              ? "item active"
              : "item"
          }
        >
          <img src={driverdIamge} alt="" />
          <span>Aproved Trucker</span>
        </div>
      </Link>
    </div>
  );
};
