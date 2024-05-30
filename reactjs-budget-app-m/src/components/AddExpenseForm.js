import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { nanoid } from "nanoid";

const AddExpenseForm = () => {
   const { dispatch } = useContext(AppContext);
   const [name, setName] = useState("");
   const [cost, setCost] = useState("");

   const AddExpenseHandler = (event) => {
      event.preventDefault();

      const expense = {
         id: nanoid(10),
         name,
         cost: parseInt(cost),
      };

      dispatch({
         type: "ADD_EXPENSE",
         payload: expense,
      });

      setName("");
      setCost("");
   };

   return (
      <form onSubmit={AddExpenseHandler}>
         <div className="mb-3">
            <label htmlFor="name" className="col-form-label">
               Name:
            </label>
            <input
               type="text"
               className="form-control"
               id="name"
               required
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
         </div>
         <div className="mb-3">
            <label htmlFor="cost" className="col-form-label">
               Cost:
            </label>
            <input
               type="text"
               className="form-control"
               id="cost"
               required
               value={cost}
               onChange={(e) => setCost(e.target.value)}
            />
         </div>
         <button type="submit" className="btn btn-primary">
            Add Expense
         </button>
      </form>
   );
};

export default AddExpenseForm;
