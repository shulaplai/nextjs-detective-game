import AnswerData from "./answerdata.js";
import React, { useEffect, useState } from "react";
import { TiTickOutline } from "react-icons/ti";
import { useForm } from "react-hook-form";

const AnswerSheet = ({ Data }) => {
   const [answer, setAnswer] = useState();
   const [showtick, setshowtick] = useState(false);

  function CheckEachAnswer(answer) {
   if (setAnswer === "sam") return setshowtick(true);}
       

   
  

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
                  onClick={() => setAnswer((answer) => answer)}
                />
                <button
                  className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6  rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => CheckEachAnswer((answer) => setAnswer)}
                >
                  Submit
                </button>
                {showtick ? (
                  <div>
                    <TiTickOutline />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
        }
export default AnswerSheet;
