import React, { useEffect, useState } from "react";
import "../component/Auth.css";
import { Outlet, useNavigate } from "react-router";

const Auth = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [btn, setBtn] = useState(false);

  const HandleAuthSubmit = (e) => {
    e.preventDefault();

    setBtn(true);
    alert("You logged successfully");
  };

  const HandleSignUp = () => {
    navigate("/business");
  };

  return (
    <>
      <div>
        <form className="auth__form" onSubmit={HandleAuthSubmit}>
          <label>User Name</label>
          <input
            type="text"
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setUserPassword(e.target.value)}
            required
          />
          <div>
            <button>Login</button>
            <button >Close</button>
            <button type="submit">Sign Up</button>
          </div>
        </form>

        {btn && (
          <div>
            <button onClick={() => navigate("/business")}>Business</button>
            <button onClick={() => navigate("/enduser")}>End User</button>
          </div>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default Auth;
