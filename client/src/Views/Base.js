import userEvent from "@testing-library/user-event";
import React from "react";
import Login from "../Components/Login";
import { useStore } from "../Store/Store";

const Base = () => {
  const user = useStore((state) => state.user);
  return (
    <div className="base">
      {/* {!user.token && <Login />} */}
      <Login />
      <h2>Or click here if you dont have an account</h2>
      <button>Register</button>
    </div>
  );
};

export default Base;
