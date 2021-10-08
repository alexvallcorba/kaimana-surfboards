// import Layout from "../../layouts/Layout1";
import { useState } from "react";
import "./SignUp.css";

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
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
    <div>
      <form
        className="create-form"
        onSubmit={(e) => {
          e.preventDefault();
          props.handleSignUp(formData);
        }}
      >
        <div className="container">
          <h1>CREATE AN ACCOUNT</h1>

          <input
            className="input"
            placeholder="Username"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          <br />

          <input
            className="input"
            placeholder="Email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <br />

          <input
            className="input"
            placeholder="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />

          <br />
          <button type="submit" className="create-button">
            CREATE
          </button>
        </div>
      </form>
    </div>
  );
}
