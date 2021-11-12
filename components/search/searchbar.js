import React, { useState } from "react";
// import { getMongodbQuestion } from "../../lib/api/mongodb.js";
// import question from "../question.js";
import { QuestionData } from "../data.js";

const SearchBar = () => {
  const [questions, setquestions] = useState();
  const onChangeHandler = (event) => {
    setquestions(event.target.value);
  };
  return (
    <div className=" pt-40 p-20	">
      <div className="bg-white flex items-center justify-self-center rounded-full shadow-xl">
        <input
          className="rounded-l-full w-full  px-6 text-gray-700 leading-tight focus:outline-none"
          id="search"
          type="text"
          placeholder="who are you"
          value={questions}
          onChange={onChangeHandler}
        />
        {QuestionData.map((item, index) => {
          return (
            <li key={index}>
              <a>
                <span>{item.request}</span>
              </a>
            </li>
          );
        })}
        <div className="p-4">
          <button
            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
            onClick={() => {
               (QuestionData.filter((e) => e.request === questions).length > 0)
                 ? alert("data") : null;
            }}
          >
            icon
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
