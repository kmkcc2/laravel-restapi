import { useNavigate } from "react-router-dom";
import classes from "./Auth.module.css";

export default function Auth() {
  const navigate = useNavigate();

  const sendRequest = (credentials) => {
    console.log(credentials);
    console.log("sending request ....");
    navigate("/dashboard");
  };
  const validateForm = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    const emailErrorDialog = document.getElementById("emailErrorDialog");
    const passwordErrorDialog = document.getElementById("passwordErrorDialog");

    if (email.value === "") {
      emailErrorDialog.innerHTML = "Email field must not be empty";
      emailErrorDialog.style.display = "block";
    } else {
      emailErrorDialog.style.display = "none";
    }

    if (password.value === "") {
      passwordErrorDialog.innerHTML = "Password field must not be empty";
      passwordErrorDialog.style.display = "block";
    } else {
      passwordErrorDialog.style.display = "none";
    }
    if (email.value !== "" && password.value !== "") {
        const credentials = {
            'email': email.value,
            'password': password.value,
        }
      email.value = "";
      password.value = "";

      sendRequest(credentials);
    }
  };
  return (
    <div className={classes.container}>
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
