import classes from "./CustomerInvoices.module.css";
import { Outlet, useLoaderData } from "react-router-dom";
import bin from "../../icons/trash-bin.png";
import edit from "../../icons/editing.png";
import { Link } from "react-router-dom";

export default function CustomerInvocies(props) {
  const data = useLoaderData();
  console.log(data.data.invoices);
  return (
    <table className={classes.table}>
      <thead>
        <tr>
          <th>Id</th>
          <th>Amount</th>
          <th>Status</th>
          <th>Billed date</th>
          <th>Paid date</th>
          <th>Action</th>
          <th>Action</th>
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
              <td>
                <div className={classes.subMenu}>
                  <Link to={invoice.id + "/edit"}>
                    <button className={classes.editButton}>
                      <img src={edit} alt="edit" />
                    </button>
                  </Link>
                  <Link to={invoice.id + "/delete"}>
                    <button className={classes.deleteButton}>
                      <img src={bin} alt="trash" />
                    </button>
                  </Link>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
