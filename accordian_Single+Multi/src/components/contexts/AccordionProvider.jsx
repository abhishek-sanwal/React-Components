import { createContext, useContext, useReducer } from "react";

const AccordionContext = createContext();

const initialState = {
  isMultiAllowed: false,
  selected: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "toggleAllowMultiple":
      return { ...state, isMultiAllowed: !state.isMultiAllowed };

    case "multiAdd":
      if (!state.isMultiAllowed) return state;
      return { ...state, selected: [...state.selected, action.payload] };

    case "singleAdd":
      return {
        ...state,
        selected: [action.payload],
        isMultiAllowed: false,
      };

    case "remove":
      return {
        ...state,
        selected: state.selected.filter(
          (element) => element !== action.payload
        ),
      };

    default: {
      throw new Error("Invalid Action !!!");
    }
  }
}

function AccordionProvider({ children }) {
  const [{ isMultiAllowed, selected }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <AccordionContext.Provider value={{ isMultiAllowed, selected, dispatch }}>
      {children}
    </AccordionContext.Provider>
  );
}

function useAccordionContext() {
  const context = useContext(AccordionContext);
  if (context === undefined)
    throw new Error("Accordion Context called outside its scope");

  return context;
}

export { AccordionProvider, useAccordionContext };
