import React, { useState } from "react";
import "./signin.css";
import logo from "../../images/1.png";
import { Email, Person, Visibility, VisibilityOff } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../redux/usersSlice";
import { NavLink, useNavigate } from "react-router-dom";

const Signin = () => {
  const [click, setClick] = useState(false);
  const users = useSelector((state) => state.users.users);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const change = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerUser = (e) => {
    e.preventDefault();

    const find = users.find((u) => u.email === user.email);
    if (find) {
      navigate("/login");
    } else {
      dispatch(
        register(...users, {
          name: user.name,
          email: user.email,
          password: user.password,
        })
      );
      setTimeout(() => {
        navigate("/login");
      }, 2000);
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
              placeholder="Username..."
              name="name"
              onChange={change}
            />
            <Person />
          </div>
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
        <button className="submit" onClick={registerUser}>
          Register
        </button>
        <p className="re">
          if you already have an account please
          <NavLink to="/login">
            <a href="">Login</a>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Signin;
