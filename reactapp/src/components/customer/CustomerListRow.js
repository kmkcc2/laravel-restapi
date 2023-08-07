import classes from "./CustomersList.module.css";
import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function CustomerListRow(props) {
  const customer = props.customer;
  const [showDetailsState, setShowDetailsState] = useState(false);
  const navigate = useNavigate();
  const showDetails = (id) => {
    setShowDetailsState(!showDetailsState);
    navigate("/dashboard/customers/" + id);
  };

  return (
    <>
      <tr
        id={customer.id}
        key={customer.id}
        onClick={() => {
          showDetails(customer.id);
        }}
        className={classes.mainTr}
      >
        <td>{customer.id}</td>
        <td>{customer.name}</td>
        <td>{customer.type === "I" ? "Individual" : "Bussiness"}</td>
        <td>{customer.email}</td>
        <td>{customer.address}</td>
        <td>tbd</td>
      </tr>
      {showDetailsState && (
        <tr ><td colSpan={6}>
          <Outlet />

        </td>
        </tr>
      )}
    </>
  );
}

export async function CustomerInvoicesLoader({ params }) {
  const response = await fetch(
    "http://127.0.0.1:8000/api/v1/customers/" +
      params.id +
      "?includeInvoices=true",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      },
    }
  );
  const data = await response.json();
  return data;
}
