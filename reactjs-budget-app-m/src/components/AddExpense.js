import Modal from "./Modal";
import AddExpenseForm from "./AddExpenseForm";

const AddExpense = () => {
   return (
      <>
         <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#addExpenseModal"
         >
            Add Expense
         </button>
         <Modal id="addExpenseModal">
            <div className="modal-dialog">
               <div className="modal-content">
                  <div className="modal-header">
                     <h5 className="modal-title" id="addExpenseModal">
                        Add Expense
                     </h5>
                     <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                     ></button>
                  </div>
                  <div className="modal-body">
                     <AddExpenseForm />
                  </div>
               </div>
            </div>
         </Modal>
      </>
   );
};

export default AddExpense;
