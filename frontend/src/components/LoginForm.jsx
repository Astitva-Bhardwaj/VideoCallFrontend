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
            Donot Have an Account ? <Link to="/register">Register</Link>
          </span>
        </form>
      </LoginContainer>
      <ToastContainer />
    </>
  );
};

// const LoginForm = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         username: '',
//         password: ''
//     });
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8081/user/login', new URLSearchParams({
//                 username: formData.username,
//                 password: formData.password
//             }));
//             console.log('User logged in successfully!', response.data);
//            navigate('/meeting');
//             // Redirect or show a success message as needed
//         } catch (error) {
//             console.error('Login failed:', error);
//         }
//     };

//     return (
//         <div className="container">
//             <h1>User Login</h1>
//             <form onSubmit={handleSubmit}>
//                 <div className="form-group">
//                     <label>Username:</label>
//                     <input type="text" name="username" value={formData.username} onChange={handleChange} />
//                 </div>
//                 <div className="form-group">
//                     <label>Password:</label>
//                     <input type="password" name="password" value={formData.password} onChange={handleChange} />
//                 </div>
//                 <input type="submit" value="Login" />
//             </form>
//         </div>
//     );
// };

export default LoginForm;
