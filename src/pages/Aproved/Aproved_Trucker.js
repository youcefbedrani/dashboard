import React, { useState, useEffect } from "react";
import "./Aproved_Trucker.scss";
import driversImager from "../../assets/8583437.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import GlobalApi from "../../Shared/GlobalApi";

export default function Aproved_Trucker() {
  const [list, setList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await GlobalApi.getAprovedTrucker();
      setList(
        response.data.map((item) => ({
          firstName: item.attributes.firstname,
          lastName: item.attributes.lastname,
          email: item.attributes.email,
          phone: item.attributes.number,
          Certificate_Num: item.attributes.Certificate_Number,
          Trucker_EXP: item.attributes.DriveLicenceDataExpiration,
          License_Num: item.attributes.License_Number,
          Net_Profit: item.attributes.NetProfit,
          Number_Plate: item.attributes.Number_Plate,
          Tow_Transport: item.attributes.Tow_Transport,
          Trip: item.attributes.Trip,
        }))
      );
    };
    fetchData();
  }, []);

  useEffect(() => {
    setFilteredData(list);
  }, [list]);

  const handleDelete = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    const filteredData = list.filter(
      (item) =>
        item.firstName.toLowerCase().includes(value) ||
        item.lastName.toLowerCase().includes(value) ||
        item.email.toLowerCase().includes(value) ||
        item.phone.toLowerCase().includes(value)
    );
    setFilteredData(filteredData);
  };

  return (
    <div className="Drivers">
      <div className="container">
        <div className="title">
          <img src={driversImager} alt="" />
          <h2>Aproved Drivers</h2>
        </div>

        <span>Drivers list:</span>
        <div className="Add">
          <Link to="addCustomer" className="link">
            <Button>Add</Button>
          </Link>
          <div className="search">
            <input
              type="text"
              placeholder="search"
              onChange={handleChange}
            />
            <SearchIcon />
          </div>
        </div>
        <div className="table overflow-x-auto overflow-y-auto max-h-80">
          <table className="table-auto min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th>FirstName</th>
                <th>LastName</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Certificate Number</th>
                <th>Trucker EXP</th>
                <th>License Number</th>
                <th>Net Profit</th>
                <th>Number Plate</th>
                <th>Tow Transport</th>
                <th>Trip</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((value, index) => (
                <tr key={index}>
                  <td>{value.firstName}</td>
                  <td>{value.lastName}</td>
                  <td>{value.email}</td>
                  <td>{value.phone}</td>
                  <td>{value.Certificate_Num}</td>
                  <td>{value.Trucker_EXP}</td>
                  <td>{value.License_Num}</td>
                  <td>{value.Net_Profit}</td>
                  <td>{value.Number_Plate}</td>
                  <td>{value.Tow_Transport}</td>
                  <td>{value.Trip}</td>
                  <td>
                    <button onClick={() => handleDelete(index)}>
                      <DeleteIcon style={{ color: 'red' }} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="Pagenation">
          <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={10}
            previousLabel="<"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </div>
  );
}
