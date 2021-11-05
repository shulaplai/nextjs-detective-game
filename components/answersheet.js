import AnswerData from "./answerdata.js";
import React, { useEffect, useState } from "react";
import { TiTickOutline } from "react-icons/ti";
import { useForm } from "react-hook-form";

const AnswerSheet = ({ Data }) => {
 const { register, handleSubmit } = useForm();
 const onSubmit = (data) => {
   alert(JSON.stringify(data));
 };
  // function CheckAnswer(value) {
  //   if ( value === "sam")
  //     return (
  //       <>
  //         <TiTickOutline />
  //       </>
  //     );
  //   else return <p>wrong</p>;
  // }

  return (
    <div className="w-full max-w-screen-lg">
      <form className="bg-white shadow-md rounded px-36 pt-6 pb-8 mb-4">
        <div className="mb-4">
          {AnswerData.map((item, index) => {
            return (
              <div onSubmit={handleSubmit(onSubmit)}>
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  for="question"
                >
                  Q{index + 1} {item.question}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="answer"
                  type="text"
                  placeholder="Answer"
              
                  
                />
                <button
                  className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6  rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                  type="button"
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
