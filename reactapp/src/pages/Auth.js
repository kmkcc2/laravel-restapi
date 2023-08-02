import { useNavigate } from "react-router-dom";
import classes from "./Auth.module.css";
import Message from "../components/message/Message";
import { useState } from "react";

export default function Auth() {
  const navigate = useNavigate();
  const [message, setMessage] = useState([]);

  const sendRequest = async (credentials) => {
    const password = document.getElementById("password");

    const response = await fetch("http://127.0.0.1:8000/api/login", {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const statusCode = response.status;
    const data = await response.json();

    if (statusCode === 422) {
      password.value = "";
      setMessage({
        class: "error",
        info: data.message,
      });
    }
    if (statusCode === 401) {
      password.value = "";
      setMessage({
        class: "warning",
        info: data.message,
      });
    }
    if (statusCode === 200) {
      setMessage({
        class: "success",
        info: "loged in successfuly",
      });

      const userInfo = JSON.stringify({
        email: data.email,
        name: data.name,
        role: data.role,
      });
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", userInfo);
      navigate('/dashboard');
    }
    console.log("sending request ....");
    console.log({
      data: data,
      status: statusCode,
    });

    // navigate("/dashboard");
  };
  const validateForm = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    if (email.value === "") {
      setMessage({
        class: "error",
        info: "Email field must not be empty",
      });
    }

    if (password.value === "") {
      setMessage({
        class: "error",
        info: "Password field must not be empty",
      });
    }
    if (email.value !== "" && password.value !== "") {
      const credentials = {
        email: email.value,
        password: password.value,
      };

      sendRequest(credentials);
    }
  };
  return (
    <div className={classes.container}>
      {message && <Message class={message.class} info={message.info} />}
      <form className={classes.form}>
        <label>Email</label>
        <label
          id="emailErrorDialog"
          className={classes.emailErrorDialog}
        ></label>
        <input type="email" id="email" name="email" />
        <label>Password</label>
        <label
          id="passwordErrorDialog"
          className={classes.passwordErrorDialog}
        ></label>
        <input type="password" id="password" name="password" />
        <button type="button" onClick={validateForm}>
          Login
        </button>
      </form>
    </div>
  );
}
