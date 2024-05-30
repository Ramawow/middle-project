import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import EditBudget from "./EditBudget";

const Budget = () => {
   const { budget, dispatch } = useContext(AppContext);

   const [isEditing, setIsEditing] = useState(false);

   const handleClickEdit = () => {
      setIsEditing(true);
   };

   const editBudgetHandler = (value) => {
      dispatch({ type: "EDIT_BUDGET", payload: value });
      setIsEditing(false);
   };

   return isEditing ? (
      <EditBudget setBudget={editBudgetHandler} />
   ) : (
      <div className="alert alert-secondary d-flex justify-content-between align-items-center">
         <p>
            Budget:
            <span className="amount"> Rp {budget.toLocaleString("id-ID")}</span>
         </p>
         <button className="btn btn-primary btn-sm" onClick={handleClickEdit}>
            Edit
         </button>
      </div>
   );
};

export default Budget;
