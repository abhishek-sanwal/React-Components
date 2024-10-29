import "./styles.css";
import useLocalStroge from "./hooks/useLocalStroge";
export default function App() {
  const [value, setValue] = useLocalStroge({
    key: "theme",
    defaultValue: "dark",
  });
  return (
    <div data-theme={value} className="App">
      <h1>Click here</h1>
      <button onClick={() => setValue(value === "dark" ? "light" : "dark")}>
        Click here to toggle
        <span> Dark </span>
      </button>
    </div>
  );
}
