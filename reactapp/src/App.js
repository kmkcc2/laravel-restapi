import { Outlet, redirect } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <body>
        <Outlet />
      </body>
    </div>
  );
}

export function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}
export function getUserCredToken() {
  const user = localStorage.getItem("user");
  return JSON.parse(user);
}

export function checkAuthLoader() {
  const token = getAuthToken();
  const cred = getUserCredToken();
console.log(cred.role)
  return !token || cred.role !== "admin" ? redirect("/auth") : null;
}

export default App;
