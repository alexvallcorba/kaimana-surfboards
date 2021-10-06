// import Layout from "../../layouts/Layout1";
import { useState } from "react";

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
      {/* <Layout userr={props.user}> */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.handleSignUp(formData);
          }}
        >
          <h3>CREATE AN ACCOUNT</h3>
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <button>CREATE</button>
        </form>
      {/* </Layout> */}
    </div>
  );
}
