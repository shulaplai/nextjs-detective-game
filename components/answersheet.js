import AnswerData from "./answerdata.js";
import React, { useEffect, useState } from "react";
import { TiTickOutline } from "react-icons/ti";
import { useForm } from "react-hook-form";
//problem state cannot be mapped, the sheet shared one state. 
// if cannot be solved , give up on map function
const AnswerSheet = ({}) => {
  const [answer, setanswer] = useState();
 const onChangeHandler = (event) => {
   setanswer(event.target.value);
 };

  return (
    <div className="w-full max-w-screen-lg my-10">
      <form className="bg-white shadow-md rounded px-36 pt-6 pb-8 	">
        <div className="mb-4">
          {AnswerData.map((item, index) => {
            return (
              <div key={index}>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Q{index + 1} {item.question}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="answer"
                  type="text"
                  placeholder="Answer"
                  value={answer}
                  onChange={onChangeHandler}
                />
                <button
                  type="button"
                  className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6  rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear "
                  onClick={() => {
                    answer === item.answers ? alert("Correct") : alert("Wrong");
                  }}
                >
                  Submit
                </button>
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
};
export default AnswerSheet;
