import { useReducer, createContext } from "react";

const initialState = {
   budget: 1_000_000,
   expenses: [
      { id: 1, name: "Beli SSD 120GB", cost: 350_000 },
      { id: 2, name: "Beli RAM Laptop 4GB", cost: 400_000 },
      { id: 3, name: "Service Motor", cost: 85_000 },
      { id: 4, name: "Beli online course (ReactJS & NextJS)", cost: 125_000 },
   ],
};

const reducer = (state, action) => {
   switch (action.type) {
      case "ADD_EXPENSE":
         return { ...state, expenses: [...state.expenses, action.payload] };
      case "DELETE_EXPENSE":
         return {
            ...state,
            expenses: state.expenses.filter((expense) => {
               return expense.id !== action.payload;
            }),
         };
      case "EDIT_BUDGET":
         return {
            ...state,
            budget: action.payload,
         };
      default:
         return state;
   }
};

const AppContext = createContext();

const AppProvider = (props) => {
   const [state, dispatch] = useReducer(reducer, initialState);

   return (
      <AppContext.Provider
         value={{
            budget: state.budget,
            expenses: state.expenses,
            dispatch,
         }}
      >
         {props.children}
      </AppContext.Provider>
   );
};

export { AppContext, AppProvider };
