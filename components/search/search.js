import React, { useState } from "react";
import question from "../question.js";

function App() {
  const searchBarData = [
    "apple",
    "banana",
    "orange",
    "grapefruit",
    "mango",
    "strawberry",
    "peach",
    "apricot",
  ];

  const [filter, setFilter] = useState("");

  return (
    <div className="App">
      <p>
        Type to filter the list:
        <input
          id="filter"
          name="filter"
          type="text"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </p>
      <ul>
        {fruit
          .filter((f) => f.includes(filter) || filter === "")
          .map((f) => (
            <li key={f}>{f}</li>
          ))}
      </ul>
    </div>
  );
}

export default App;

