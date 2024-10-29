import { useAccordionContext } from "./contexts/AccordionProvider";
function AccordionElement({ element }) {
  const { isMultiAllowed, selected, dispatch } = useAccordionContext();
  // Derived State
  const isOpened = selected?.includes(element.id);
  const styles = {
    display: "grid",
    justifyContent: "space-between",
    backgroundColor: "#f2f2f2",
    textAlign: "center",
    gridTemplateColumns: "80fr 20fr",
  };

  return (
    <div style={styles}>
      <div>
        <h3>{element.question}</h3>
        {isOpened && <p>{element.answer}</p>}
      </div>
      <button
        style={{
          border: "none",
          borderRadius: "8px",
          backgroundColor: "#adadef",
          cursor: "pointer",
        }}
        onClick={() =>
          isOpened
            ? dispatch({ type: "remove", payload: element.id })
            : isMultiAllowed
            ? dispatch({ type: "multiAdd", payload: element.id })
            : dispatch({ type: "singleAdd", payload: element.id })
        }
      >
        ++
      </button>
    </div>
  );
}

export default AccordionElement;
