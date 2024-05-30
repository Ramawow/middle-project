const Modal = (props) => {
   return (
      <div
         className="modal fade"
         id={props.id}
         tabIndex="-1"
         aria-labelledby="addExpenseModal"
         aria-hidden="true"
      >
         {props.children}
      </div>
   );
};

export default Modal;
