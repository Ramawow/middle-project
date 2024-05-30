import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseItem = ({ expense }) => {
   const { dispatch } = useContext(AppContext);

   const deleteExpenseHandler = () => {
      dispatch({ type: "DELETE_EXPENSE", payload: expense.id });
   };

   return (
      <li className="list-group-item d-flex justify-content-between align-items-center py-3">
         {expense.name}
         <div className="d-flex align-items-center">
            <span className="badge bg-primary rounded-pill">
               {expense.cost.toLocaleString("id-ID")}
            </span>
            <button
               type="button"
               className="btn-close ms-3"
               aria-label="Close"
               style={{ fontSize: "13px" }}
               onClick={deleteExpenseHandler}
            ></button>
         </div>
      </li>
   );
};

export default ExpenseItem;
