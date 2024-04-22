import React from "react";
import { useState, useEffect } from "react";
import "./drivers.scss";
import driversImager from "../../assets/8583437.png";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import SearchIcon from "@mui/icons-material/Search";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import GlobalApi from "../../Shared/GlobalApi";
import { FirebaseAuth, db } from "../../Shared/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import emailjs from "emailjs-com";

export const Drivers = () => {
  const auth = FirebaseAuth;

  const sendEmail = async (nameEmail, passwordEmail, emailEmail) => {
    try {
      emailjs.init("p45xu_CwDIP5AkZVj");
      emailjs
        .send("service_jryf21n", "template_jtvifn1", {
          to_name: nameEmail,
          from_name: "DepanageDz App",
          recipient: emailEmail,
          message: "Email : " + emailEmail + " Password : " + passwordEmail,
        })
        .then(
          function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Email sent successfully!");
          },
          function (error) {
            console.log("FAILED...", error);
          },
        );
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  let [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await GlobalApi.getTrucker();
      console.log(response["data"]);
      setList(
        response.data.map((item) => ({
          firstName: item.attributes.firstname,
          lastName: item.attributes.lastname,
          email: item.attributes.email,
          phone: item.attributes.number,
          password: item.attributes.password,
          Certificate_Num: item.attributes.Certificate_Number,
          Trucker_EXP: item.attributes.DriveLicenceDataExpiration,
          License_Num: item.attributes.License_Number,
          Net_Profit: item.attributes.NetProfit,
          Number_Plate: item.attributes.Number_Plate,
          Tow_Transport: item.attributes.Tow_Transport,
          Trip: item.attributes.Trip,
        })),
      );
    };
    fetchData();
  }, []);

  let [realData, setRealData] = useState(list);

  let handelDelete = (i) => {
    let newList = list.filter((v) => v.number !== i);
    let count = 0;
    newList.forEach((value) => {
      value.number = count;
      count++;
    });
    setList(newList);
    setRealData(newList);
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

  const handleAproved = async (index) => {
    if (list.length > 0) {
      const selectedItem = list[index];
      const data = {
        firstname: selectedItem.firstName,
        lastname: selectedItem.lastName,
        email: selectedItem.email,
        password: selectedItem.password,
        number: selectedItem.phone,
        Certificate_Number: selectedItem.Certificate_Num,
        DriveLicenceDataExpiration: selectedItem.Trucker_EXP,
        License_Number: selectedItem.License_Num,
        NetProfit: selectedItem.Net_Profit,
        Number_Plate: selectedItem.Number_Plate,
        Tow_Transport: selectedItem.Tow_Transport,
        Trip: selectedItem.Trip,
      };

      const emailEmail = data.email;
      const passwordEmail = data.password;
      const nameEmail = data.firstname + " " + data.lastname;

      try {
        const response = await GlobalApi.setAprovedTrucker(data);
        await createUserWithEmailAndPassword(auth, data.email, data.password);
        //send email with emailjs here
        await sendEmail(nameEmail, passwordEmail, emailEmail);
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log("List is empty or data hasn't been fetched yet.");
    }
  };

  return (
    <div className="Drivers">
      <div className="container">
        <div className="title">
          <img src={driversImager} alt="" />
          <h2>Drivers</h2>
        </div>

        <span>Drivers list:</span>
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
        <div className="table overflow-x-auto overflow-y-auto max-h-80">
          <table className="table-auto min-w-full divide-y divide-gray-200">
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
            {list.map((value, index) => (
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
                  <Link to={"/dashboard/aprovedtrucker"}>
                    <button onClick={() => handleAproved(index)}>
                      <CheckIcon />
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
