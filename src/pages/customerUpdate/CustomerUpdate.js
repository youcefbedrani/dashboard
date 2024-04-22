import React from "react";
import "./customerUpdate.scss";
import custmorImage from "../../assets/4814852.png";
import Image from "../../assets/istockphoto-1222357475-612x612.jpg";


export const CustomerUpdate = () => {
  return (
    <div className="CustomerUpdate">
      <div className="container">
        <div className="title">
          <img src={custmorImage} alt="" />
          <h2>Customer</h2>
        </div>
        <div className="customerInfo">
          <p>
            Customer<span>/Update</span>
          </p>
          <span>id: 2384741</span>
        </div>
        <div className="Info">
          <div className="userInfo">
            <label htmlFor="">Userame</label>
            <input type="text" />
            <label htmlFor="">Email</label>
            <input type="email" />
            <label htmlFor="">Phone</label>
            <input type="text" />
            <div className="button">
              <button>Update</button>
              <button className="delete">Delete</button>
            </div>
          </div>
          <div className="image">
            <label htmlFor="">Userame</label>
            <div className="img">
              <img src={Image} alt="" />
            </div>
            <button className="delete">Delete Image</button>
          </div>
        </div>
      </div>
    </div>
  );
};
