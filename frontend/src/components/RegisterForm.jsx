import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; // Import the CSS file
import RegisterContainer from "./css/Registercss";
import Logo from "../assets/logo.png"
const RegisterForm = () => {
  const [isture, settrue] = useState(false);
  const navigate = useNavigate();
  const [data, setdata] = useState({
    username: "",
    password: "",
    email: "",
    confirmpassword: "",
  });
  function updatedata(event) {
    setdata({ ...data, [event.target.name]: event.target.value });
  }
  const setbuttonfn = (event) => {
    if (
      data.password === event.target.value ||
      data.confirmpassword === event.target.value
    ) {
      settrue(true);
    } else {
      settrue(false);
    }
  };
  async function submitform(event) {
    event.preventDefault();
    try {
      navigate("/login");
      await axios.post("http://localhost:8081/user/register", {
        username: data.username,
        password: data.password,
        email: data.email,
      });
      console.log("User registered successfully!");

      // Redirect or show a success message as needed
    } catch (error) {
      console.error("Registration failed:", error);
    }
  }

  return (
    <RegisterContainer>
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
            updatedata(e);
          }}
        ></input>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => {
            updatedata(e);
          }}
        ></input>
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            setbuttonfn(e);
            updatedata(e);
          }}
        ></input>
        <input
          type="password"
          name="confirmpassword"
          placeholder="Confrim Password"
          onChange={(e) => {
            setbuttonfn(e);
            updatedata(e);
          }}
        ></input>
        {isture ? <button type="submit">submit</button> : ""}
        <span>
          Already Have an Account ? <Link to="/login">Login</Link>
        </span>
      </form>
    </RegisterContainer>
  );
};

export default RegisterForm;
