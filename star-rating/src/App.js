import { useState } from "react";
import "./styles.css";
import Image from "./Image";
import "./styles.css";
export default function App() {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  function handleRating(stars) {
    console.log(" I am clicked");
    setRating(stars + 1);
  }

  function handleMouseEnter(stars) {
    setTempRating(stars + 1);
  }

  function handleMouseOut() {
    setTempRating(0);
  }

  return (
    <div className="App">
      {Array.from({ length: 10 }, (element, index) => (
        <Image
          role="button"
          key={index}
          index={index}
          setRating={setRating}
          setTempRating={setTempRating}
          onRatingClick={handleRating}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseOut}
          rating={rating}
          tempRating={tempRating}
        />
      ))}
      <h2>{`Rating:${tempRating > 0 ? tempRating : rating}`}</h2>
    </div>
  );
}
