import React, { useState } from "react";
import "./login.css";
import logo from "../../images/1.png";
import { Email, Person, Visibility, VisibilityOff } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { loginFailure, loginStart, loginSuccess } from "../../redux/userSlice";

const Login = () => {
  const users = useSelector((state) => state.users.users);
  const isFetching = useSelector((state) => state.user.isFetching);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const change = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const loginUser = (e) => {
    e.preventDefault();
    dispatch(loginStart());
    const find = users.find((u) => u.email === input.email);
    if (find) {
      dispatch(loginSuccess(find.name));
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      dispatch(loginFailure());
    }
  };

  return (
    <div className="back">
      <div className="container">
        <img src={logo} alt="" className="log-logo" />
        <div className="inputs">
          <div className="input">
            <input
              type="text"
              placeholder="Email..."
              name="email"
              onChange={change}
            />
            <Email />
          </div>
          <div className="input">
            <input
              type={click ? "text" : "password"}
              placeholder="Password..."
              name="password"
              onChange={change}
            />
            {click ? (
              <Visibility
                onClick={() => setClick(!click)}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <VisibilityOff
                onClick={() => setClick(!click)}
                style={{ cursor: "pointer" }}
              />
            )}
          </div>
        </div>
        <button className="submit" onClick={loginUser}>
          Login
        </button>
        <p className="re">
          if you don't have an account please{" "}
          <NavLink to="/register">
            <a href="">Register</a>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
