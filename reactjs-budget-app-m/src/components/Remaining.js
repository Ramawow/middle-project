import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
   const { budget, expenses } = useContext(AppContext);

   const totalExpenses = expenses.reduce((prevVal, currVal) => {
      return prevVal + currVal.cost;
   }, 0);

   const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

   return (
      <div className={`alert ${alertType}`}>
         <p>
            Remaining:{" "}
            <span className="amount">
               Rp {(budget - totalExpenses).toLocaleString("id-ID")}
            </span>
         </p>
      </div>
   );
};

export default Remaining;
