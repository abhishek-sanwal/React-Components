import AccordionElement from "./AccordionElement";
import styles from "./Accordion.module.css";
const arr = [
  {
    id: 1,
    question: "What is React",
    answer: "React is js framework developed by Facebook(cka Meta) in 2013",
  },
  {
    id: 2,
    question: "What is React",
    answer: "React is js framework developed by Facebook(cka Meta) in 2013",
  },
  {
    id: 3,
    question: "What is React",
    answer: "React is js framework developed by Facebook(cka Meta) in 2013",
  },
];

function Accordion() {
  return (
    <div className={styles.accordionContainer}>
      {arr.map((element) => (
        <AccordionElement key={element.id} element={element} />
      ))}
    </div>
  );
}

export default Accordion;
