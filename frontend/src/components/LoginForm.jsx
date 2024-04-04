import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./css/LoginFormcss.jsx";
import LoginContainer from "./css/LoginFormcss.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import toastOption from "../toast_setting.js";
import Logo from "../assets/logo.png"
const LoginForm = () => {
  const navigate = useNavigate();
  const [istrue, settrue] = useState(false);
  const [data, setdata] = useState({
    username: "",
    password: "",
  });

  function getuserdata(event) {
    setdata({ ...data, [event.target.name]: event.target.value });
  }

  async function submitform(event) {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8081/user/login", new URLSearchParams({
        username: data.username,
        password: data.password,
      }));
      console.log("User logged in successfully!", response.data);
      navigate("/meeting");
    } catch (error) {
      toast.error("Password is Incorrect", toastOption);
    }
  }

  return (
    <>
      <LoginContainer>
        <form
          onSubmit={(event) => {
            submitform(event);
          }}
        >
          <div className="brand">
            <img src={Logo} alt="Logo" />/
          <div className="heading"> <h1>VisionConnect</h1></div>
          </div>
          

          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(e) => {
              getuserdata(e);
            }}
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => {
              getuserdata(e);
              if (e.target.value !== "") {
                settrue(true);
              } else {
                settrue(false);
              }
            }}
          ></input>

          {istrue ? <button type="submit">submit</button> : ""}
          <span>
            Do not Have an Account ? <Link to="/register">Register</Link>
          </span>
        </form>
      </LoginContainer>
      <ToastContainer />
    </>
  );
};



export default LoginForm;
