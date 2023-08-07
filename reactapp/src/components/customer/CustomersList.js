import { useLoaderData } from "react-router-dom";

import CustomerListRow from "./CustomerListRow";

export default function CustomersList() {

  const customers = useLoaderData();
  return (
    <table id="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Type</th>
          <th>Email</th>
          <th>Address</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {customers.data.map((customer) => {
          return (
            <CustomerListRow customer={customer} />
          );
        })}
      </tbody>
    </table>
  );
}

export async function CustomersListLoader() {
  const response = await fetch("http://127.0.0.1:8000/api/v1/customers", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
  });
  const data = await response.json();
  return data;
}
