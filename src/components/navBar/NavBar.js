import { ImageOutlined } from "@mui/icons-material";
import React from "react";
import "./NavBar.scss";
import flag from "../../assets/algiria.jpg";
import logo from "../../assets/Logo.png";
import adminImage from "../../assets/pngtree-user-vector-avatar-png-image_1541962.jpeg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export const NavBar = () => {
  return (
    <div className="navbar">
      <div className="container-fluid">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="info">
          <div className="admin">
            <img src={adminImage} alt="" />

            <div className="adminInfo">
              <span className="name">name</span>
              <ArrowDropDownIcon />
            </div>
          </div>
          <img src={flag} alt="" className="flag" />
        </div>
      </div>
    </div>
  );
};
