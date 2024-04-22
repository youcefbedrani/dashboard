import React from 'react'
import "./driversUpdate.scss"
import driverImage from "../../assets/8583437.png"
import Image from "../../assets/istockphoto-1222357475-612x612.jpg"
export const DriversUpdate = () => {
return (
  <div className="DriversUpdate">
    <div className="container">
      <div className="title">
        <img src={driverImage} alt="" />
        <h2>Drivers</h2>
      </div>
      <div className="customerInfo">
        <p>
          Drivers<span>/Update</span>
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
          <label htmlFor="">First Name</label>
          <input type="text" />
          <label htmlFor="">List Name</label>
          <input type="text" />

          <div className="button">
            <button>Update</button>
            <button className="delete">Delete</button>
          </div>
        </div>
        <div className="image">
          <label htmlFor="">Age</label>
          <input type="number" />
          <label htmlFor="">Driver Licenes on</label>
          <input type="text" />
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
}
