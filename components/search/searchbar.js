import React, { useState } from "react";
// import { getMongodbQuestion } from "../../lib/api/mongodb.js";
// import question from "../question.js";
import { QuestionData } from "../data.js";
import Autosuggest from "react-autosuggest";

const SearchBar = () => {
  const QuestionDataRequest =
    ("who are you?",
    "a",
    "where are you",
    "what are you",
    "How are you",
    "why do you");

  const [questions, setquestions] = useState("");
  const [explain, setexplain] = useState(false);
  const onChangeHandler = (event) => {
    setquestions(event.target.value);
  };
  const onChangeHandler2 = () => {
    setexplain(true);
  };
  const [suggestions, setSuggestions] = useState([]);
  const filterItems = (arr, query) => {
    return arr.filter(
      (el) => el.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );
  };
  return (
    <div className=" pt-40 p-20	">
      <div className="bg-white flex items-center justify-self-center rounded-full shadow-xl">
        <div>
          <label>Detective Game</label>
          <Autosuggest
            onSuggestionsFetchRequested={async ({ value }) => {
              if (!value) {
                setSuggestions([]);
                return;
              }

              try {
                setSuggestions([await filterItems(QuestionDataRequest, value)]);
              } catch (e) {
                setSuggestions([]);
              }
            }}
            onSuggestionsClearRequested={() => {
              setSuggestions([]);
            }}
            getSuggestionValue={(suggestions) => suggestions}
            renderSuggestion={(suggestions) => <div>{suggestions}</div>}
            inputProps={{
              value: questions,
              onChange: onChangeHandler,
              suggestions: { suggestions },
              autoComplete: "abcd",
              placeholder: "who are you",
              className:
                "rounded-l-full w-full  px-6 text-gray-700 leading-tight focus:outline-none",
              id: "search",
              type: "text",
            }}
          />
        </div>

        <div className="p-4">
          <button
            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
            onClick={() => {
              QuestionData.filter((e) => e.request === questions).length > 0
                ? onChangeHandler2()
                : null;
            }}
          >
            icon
          </button>
        </div>
      </div>
      <div className="box-border h-32 w-scree mx-20 p-20 border-4 ">
        {explain ? (
          <h1>
            {QuestionData.forEach((item, index) => {
              let id = QuestionData.findIndex((e) => e.request === questions);
              const Explaination = QuestionData[id]["answer"];
              return console.log(Explaination);
            })}
            aa
          </h1>
        ) : null}
      </div>
    </div>
  );
};
export default SearchBar;
