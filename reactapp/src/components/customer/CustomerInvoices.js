import classes from "./CustomerInvoices.module.css";
import { useLoaderData } from "react-router-dom";

export default function CustomerInvocies(props) {
  const data = useLoaderData();
  console.log(data.data.invoices);
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>id</th>
          <th>amount</th>
          <th>status</th>
          <th>billed_date</th>
          <th>paid_date</th>
        </tr>
      </thead>
      <tbody>
        {data.data.invoices.map((invoice) => {
          return (
            <tr key={invoice.id} className={classes.mainTr}>
              <td>{invoice.id}</td>
              <td>{invoice.amount}</td>
              <td>{invoice.status}</td>
              <td>{invoice.billedDate}</td>
              <td>{invoice.paidDate}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
