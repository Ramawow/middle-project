import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
   const { expenses } = useContext(AppContext);

   const totalExpenses = expenses.reduce((prevVal, currVal) => {
      return prevVal + currVal.cost;
   }, 0);

   return (
      <div className="alert alert-primary">
         <p>
            Spent so far:{" "}
            <span className="amount">
               Rp {totalExpenses.toLocaleString("id-ID")}
            </span>
         </p>
      </div>
   );
};

export default ExpenseTotal;
