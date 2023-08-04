import React from "react";
import "../component/Auth.css";

const EndUserReg = () => {

  // localStorage.setItem('item', 'm')
  const HandleEndUserReg = () => {

  }
  
  return (
    <>
      <div>
        <form onSubmit={HandleEndUserReg}>
          <h5>End User Registration</h5>
          <div>
            <label>First Name</label>
            <input type="text" required />
          </div>
          <div>
            <label>Last Name</label>
            <input type="text" required />
          </div>
          <div>
            <label>Email ID</label>
            <input type="email" required />
          </div>
          <div>
            <label>Birth Date</label>
            <input type="text" required />
          </div>
          <div>
            <label>Address</label>
            <input type="text" required />
          </div>
          <div>
            <label>Country</label>
            <input type="text" required />
          </div>
          <div>
            <label>State</label>
            <input type="text" required />
          </div>
          <div>
            <label>City</label>
            <input type="text" required />
          </div>
          <div>
            <label>Mobile No</label>
            <input type="text" required />
          </div>
          <div>
            <label>User Name</label>
            <input type="text" required />
          </div>
          <div>
            <label>Password</label>
            <input type="text" required />
          </div>

          <div>
            <button>Save</button>
            <button>Close</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EndUserReg;
