import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";

export default function SignIn(props) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="sigin-page">
      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          props.handleSignIn(formData);
        }}
      >
        <div className="login-container">
          <h1>SIGN IN</h1>

          <input
            className="input1"
            placeholder="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <br />

          <input
            className="input1"
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <br />
          <div className="create-link">
            <h2 className="new-user"> New user?</h2>
            <Link className="create-account" to="/sign-up">Create an Account</Link>
          </div>
          <br />
          <button className="button-login">LOGIN</button>
        </div>
      </form>
    </div>
  );
}
