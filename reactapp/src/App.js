import { Outlet, redirect } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="relative">
        <Outlet />
      </div>
    </div>
  );
}

export function getAuthToken() {
  const token = sessionStorage.getItem("token");
  return token;
}
export function getUserCredToken() {
  const user = sessionStorage.getItem("user");
  return JSON.parse(user);
}

export function checkAuthLoader() {
  const token = getAuthToken();
  const cred = getUserCredToken();
  return !token || cred.role !== "admin" ? redirect("/auth") : null;
}

export default App;
