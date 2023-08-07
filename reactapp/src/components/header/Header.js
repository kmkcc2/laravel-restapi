import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";

export default function Header(){
    async function logout(){
        const response = fetch('http://127.0.0.1:8000/api/logout', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Bearer "+sessionStorage.getItem('token')
              },
        });
        const data = await response;
        const jsonData = await data.json();
        console.log(data.status);
        console.log(jsonData);
        if(jsonData.message === "logged out"){
            sessionStorage.clear();
            navigate("/auth");
        }
        else{
            alert("error")
        }

    }

    const navigate = useNavigate();
    const user = JSON.parse(sessionStorage.getItem("user"));
    return <header>
        <div className={classes.container}>
            <div className={classes.option} onClick={() => {navigate("dashboard/customers")}}>Customers</div>
            <div className={classes.option} onClick={() => {navigate("dashboard/customers")}}>Invoices</div>
            <div className={classes.option} onClick={() => {navigate("dashboard/customers")}}>Contact</div>
            <div className={`${classes.flexEnd} ${classes.flex}`}>
                <div className={`${classes.option} ${classes.flexEnd} ${classes.name}`} onClick={() => {navigate("dashboard/customers")}} >{user.name}</div>
                <div onClick={logout} className={`${classes.option} ${classes.flexEnd}`} >Logout</div>
            </div>

        </div>
    </header>
}