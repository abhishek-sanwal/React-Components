import { useState } from "react";
import "./styles.css";

export default function App() {
  const [block, setBlock] = useState(1);
  return (
    <div className="App">
      <div>
        {Array.from({ length: 3 }, (ele, index) => (
          <button
            key={index + 1}
            onClick={() => setBlock(index + 1)}
            className={`btn-1 ${block === index + 1 ? "active" : ""}`}
          >
            Tab <span>{index}</span>
          </button>
        ))}
      </div>
      <div className="content">
        {block === 1 && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos magni
            voluptatibus modi perspiciatis nam cum, fugiat incidunt excepturi
            ullam vel! Esse, accusamus alias laudantium vitae fugit ullam vero
            quasi beatae.
          </p>
        )}
        {block === 2 && (
          <p>
            I can enter any random data here no matter what I don't need to
            worry about js and css Because i am expert in it.
          </p>
        )}
        {block === 3 && (
          <p>Bob the builder karke dikhayenge bob the builder wah bhai wah</p>
        )}
      </div>
    </div>
  );
}
