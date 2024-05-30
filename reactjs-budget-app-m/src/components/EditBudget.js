import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

const EditBudget = ({ setBudget }) => {
   const { budget } = useContext(AppContext);
   const [value, setValue] = useState(budget);

   const handleSubmit = (event) => {
      event.preventDefault();
      setBudget(parseInt(value));
   };

   return (
      <div className="alert alert-secondary">
         <form className="row" onSubmit={handleSubmit}>
            <div className="col">
               <input
                  type="number"
                  className="form-control"
                  placeholder="Set your budget"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
            </div>
            <div className="col-auto">
               <button type="submit" className="btn btn-primary">
                  Save
               </button>
            </div>
         </form>
      </div>
   );
};

export default EditBudget;
