import React, { useState } from "react";
import "../component/Auth.css";

const BusinessReg = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [businessType, setBusinessType] = useState("");
  const [businessEstDate, setBusinessEstDate] = useState("");
  const [add, setAdd] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [mobileNum, setMobileNum] = useState("");
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const HandleBusinessSubmit = (e) => {
    e.preventDefault();

    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.match(validRegex)) {
      alert("Invalid email address!");
      return;
    }

    if (businessName.trim().length <= 10) {
      alert("Minimum 10 Letter req in businees name");
      return;
    }

    if (add.trim().length <= 25) {
      alert("Minimum 25 Letter req in address");
      return;
    }

    if (pass != confirmPass) {
      alert("Password do not match");
      return;
    }

    let userData = {
      firstName: fName,
      lastName: lName,
      businessName: businessName,
      businessType: businessType,
      businessEstDate: businessEstDate,
      addres: add,
      country: country,
      city: city,
      state: state,
      mobileNum: mobileNum,
      userName: userName,
      password: pass,
      confirmPassword: confirmPass,
    };

    localStorage.setItem("Business Registration", JSON.stringify(userData));
  };

  return (
    <>
      <div>
        <form
          className="Business__form"
          onSubmit={(e) => HandleBusinessSubmit(e)}
        >
          <h5>Business Registration</h5>
          <div>
            <label>First Name</label>
            <input
              type="text"
              onChange={(e) => setFName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              onChange={(e) => setLName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email ID</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Business Name</label>
            <input
              type="text"
              onChange={(e) => setBusinessName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Business Type</label>
            <input
              type="text"
              onChange={(e) => setBusinessType(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Business Est. Date</label>
            <input
              type="date"
              onChange={(e) => setBusinessEstDate(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Address</label>
            <input
              type="text"
              onChange={(e) => setAdd(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Country</label>
            <input
              type="text"
              onChange={(e) => setCountry(e.target.value)}
              required
            />
          </div>
          <div>
            <label>State</label>
            <input
              type="text"
              onChange={(e) => setState(e.target.value)}
              required
            />
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Landline No</label>
            <input
              type="tel"
              // onChange={(e) => (e.target.value)}
              required
            />
          </div>
          <div>
            <label>Mobile No</label>
            <input
              type="tel"
              onChange={(e) => setMobileNum(e.target.value)}
              required
            />
          </div>
          <div>
            <label>User Name</label>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              onChange={(e) => setPass(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              onChange={(e) => setConfirmPass(e.target.value)}
              required
            />
          </div>
          <div>
            <button type="submit">Save</button>
            <button>Close</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BusinessReg;
