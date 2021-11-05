import AnswerData from "./answerdata.js";
import React, { useEffect, useState } from "react";

const AnswerSheet = ({ AnswerData }) => {
  const [answer, setanswer] = useState();

  return (
    <div className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          {AnswerData.map((item, index) => {
            return (
              <div>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="question"
                >
                  {item.question}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username"
                  type="text"
                  placeholder="Username"
                />
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
};
export default AnswerSheet;
