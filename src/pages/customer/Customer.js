import React from "react";
import { useState, useEffect } from "react";
import "./customer.scss";
import custmorImager from "../../assets/4814852.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import GlobalApi from "../../Shared/GlobalApi";

export const Customer = () => {
  let [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await GlobalApi.getUsers();
      console.log(response["data"]);
      setList(response.data.map(item => ({
        firstName: item.attributes.firstname,
        lastName: item.attributes.lastname,
        email: item.attributes.email,
        password: item.attributes.password,
        phone: item.attributes.number,
      })));
    };
    fetchData();
  }, []);

  let [realData, setRealData] = useState(list);

  let handelDelete = (i) => {
  };
  let handelChange = (e) => {
    let filtredData = realData.filter(
      (value) =>
        value.userName.toLocaleLowerCase().includes(e.target.value) ||
        value.email.toLocaleLowerCase().includes(e.target.value) ||
        value.phone.toLocaleLowerCase().includes(e.target.value),
    );
    setList(filtredData);
  };
  return (
    <div className="Customer">
      <div className="container">
        <div className="title">
          <img src={custmorImager} alt="" />
          <h2>Customer</h2>
        </div>

        <span>Customer list:</span>
        <div className="Add">
          <Link to="addCustomer" className="link">
            <Button>Add</Button>
          </Link>
          <div className="search">
            <input
              type="text"
              placeholder="searsh"
              onChange={(e) => handelChange(e)}
            />
            <SearchIcon />
          </div>
        </div>
        <div className="table">
          <table>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
            {list.map((value, index) => (
              <tr key={index}>
                <td>{value.firstName}</td>
                <td>{value.lastName}</td>
                <td>{value.email}</td>
                <td>{value.password}</td>
                <td>{value.phone}</td>
                <td>
                  <Link to={"/dashboard/customerUpdate"}>
                    <button>
                      <EditIcon />
                    </button>
                  </Link>

                  <button onClick={() => handelDelete(index)}>
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
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
};
