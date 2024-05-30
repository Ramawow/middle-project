import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AddExpense from "./components/AddExpense";
import { AppProvider } from "./context/AppContext";

const App = () => {
   return (
      <AppProvider>
         <div className="container pt-3 pb-3">
            <h1 className="mt-3">My Budget Planner</h1>
            <div className="row mt-3">
               <div className="col-md-4">
                  <Budget />
               </div>
               <div className="col-md-4">
                  <Remaining />
               </div>
               <div className="col-md-4">
                  <ExpenseTotal />
               </div>
            </div>
            <section className="expense mt-3">
               <div className="d-flex justify-content-between align-items-baseline">
                  <h3>Expenses</h3>
                  <AddExpense />
               </div>
               <div className="row mt-3">
                  <div className="col-sm">
                     <ExpenseList />
                  </div>
               </div>
            </section>
         </div>
      </AppProvider>
   );
};

export default App;
