import { useState } from "react";
import { Link } from "react-router-dom";
// import Layout from "../../layouts/Layout1";

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
    <div>
      {/* <Layout> */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.handleSignIn(formData);
          }}
        >
          <h3>Sign In</h3>
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
            Password:
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          <br />
          <h3 className="new-user"> New user?</h3>
          <Link to="/sign-up">Create an Account</Link>
        </form>
      {/* </Layout> */}
    </div>
  );
}
