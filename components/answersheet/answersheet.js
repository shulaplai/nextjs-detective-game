import React, { useEffect, useState } from "react";
// import { TiTickOutline } from "react-icons/ti";
// import { useForm } from "react-hook-form";
//problem state cannot be mapped, the sheet shared one state. 
// if cannot be solved , give up on map function
const AnswerSheet = () => {
  const [answer, setanswer] = useState();
  const [answer2, setanswer2] = useState();
  const [answer3, setanswer3] = useState();
  const [answer4, setanswer4] = useState();
  const [answer5, setanswer5] = useState();
 const onChangeHandler = (event) => {
   setanswer(event.target.value);
 };const onChangeHandler2 = (event) => {
   setanswer2(event.target.value);
 };const onChangeHandler3 = (event) => {
   setanswer3(event.target.value);
 };const onChangeHandler4 = (event) => {
   setanswer4(event.target.value);
 };const onChangeHandler5 = (event) => {
   setanswer5(event.target.value);
 };
  return (
    <div className="w-full max-w-screen-lg my-10">
      <form className="bg-white shadow-md rounded px-36 pt-6 pb-8 	">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Q1 who is the killer ?
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
              answer === "sam" ? alert("Correct") : alert("Wrong");
            }}
          >
            Submit
          </button>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Q2 who is the killer ?
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="answer"
            type="text"
            placeholder="Answer"
            value={answer2}
            onChange={onChangeHandler2}
          />
          <button
            type="button"
            className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6  rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear "
            onClick={() => {
              answer2 === "sam" ? alert("Correct") : alert("Wrong");
            }}
          >
            Submit
          </button>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Q3 who is the killer ?
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="answer"
            type="text"
            placeholder="Answer"
            value={answer3}
            onChange={onChangeHandler3}
          />
          <button
            type="button"
            className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6  rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear "
            onClick={() => {
              answer3 === "sam" ? alert("Correct") : alert("Wrong");
            }}
          >
            Submit
          </button>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Q4 who is the killer ?
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="answer"
            type="text"
            placeholder="Answer"
            value={answer4}
            onChange={onChangeHandler4}
          />
          <button
            type="button"
            className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6  rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear "
            onClick={() => {
              answer4 === "sam" ? alert("Correct") : alert("Wrong");
            }}
          >
            Submit
          </button>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Q5 who is the killer ?
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="answer"
            type="text"
            placeholder="Answer"
            value={answer5}
            onChange={onChangeHandler5}
          />
          <button
            type="button"
            className="bg-emerald-500 text-black active:bg-emerald-600 font-bold uppercase text-sm px-6  rounded shadow hover:shadow-lg outline-none focus:outline-none ease-linear "
            onClick={() => {
              answer5 === "sam" ? alert("Correct") : alert("Wrong");
            }}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AnswerSheet;
