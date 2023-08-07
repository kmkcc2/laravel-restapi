import { Outlet } from "react-router-dom";
import classes from "./Dashboard.module.css";

export default function Dashboard(){
    return <div className={classes.container}>
        <Outlet />
    </div>
}