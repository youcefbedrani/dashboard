import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import DashboardImage from "../../assets/8899687.png";
import { Card, Container } from "react-bootstrap";
import { UNSAFE_convertRoutesToDataRoutes } from "@remix-run/router";
import GlobalApi from "../../Shared/GlobalApi";

export const Dashboard = () => {
  const [totalRide, setTotalRides] = useState(0);
  const [completeRide, setCompleteRides] = useState(0);
  const [canceledRide, setCanceledRides] = useState(0);
  const [numberUser, setNumberUser] = useState(0);
  const [numberTruckers, setNumberTruckers] = useState(0);
  const [profit, setProfit] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const users = await GlobalApi.getUsers();
      {
        var count = 0;
        users["data"].map((item, index) => {
          count++;
        });
        setNumberUser(count);
      }
      const truckers = await GlobalApi.getTrucker();
      {
        var countT = 0;
        truckers["data"].map((item, index) => {
          countT++;
        });
        setNumberTruckers(countT);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="Dashboard">
      <div className="container">
        <div className="title">
          <img src={DashboardImage} alt="" />
          <h2>Dashboard</h2>
        </div>
        <div className="cards row">
          <div className="col-lg-4 col-md-6 col-sm-12 text-center text-sm-start">
            <Card>
              <p>Total Rides</p>
              <p>{totalRide}</p>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center text-sm-start">
            <Card>
              <p>Completed Rides</p>
              <p>{completeRide}</p>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center text-sm-start">
            <Card>
              <p>Conceled Rides</p>
              <p>{canceledRide}</p>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center text-sm-start">
            <Card>
              <p>Users Number</p>
              <p>{numberUser}</p>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center text-sm-start">
            <Card>
              <p>Number of Truckers</p>
              <p>{numberTruckers}</p>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center text-sm-start">
            <Card>
              <p>Profit</p>
              <p>{profit}</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
