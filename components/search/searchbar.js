import React, { useState } from "react";
// import { getMongodbQuestion } from "../../lib/api/mongodb.js";
// import question from "../question.js";
import { QuestionData } from "../data.js";
// import Autosuggest from "react-autosuggest";

const SearchBar = () => {
  const [questions, setquestions] = useState("");
  const [explain, setexplain] = useState(false);

  const onChangeHandler = (event) => {
    setquestions(event.target.value);
    const onChangeHandler2 = () => {
      setexplain(true);
    };
    const [searchtext, setSearchtext] = useState("");
    const [suggest, setSuggest] = useState([]);
    const [resfound, setResfound] = useState(true);
    const handleChange = (e) => {
      let searchval = e.target.value;
      let suggestion = [];
      if (searchval.length > 0) {
        suggestion = lang
          .sort()
          .filter((e) => e.toLowerCase().includes(searchval.toLowerCase()));
        setResfound(suggestion.length !== 0 ? true : false);
      }
      setSuggest(suggestion);
      setSearchtext(searchval);
    };

    const suggestedText = (value) => {
      console.log(value);
      setSearchtext(value);
      setSuggest([]);
    };

    const getSuggestions = () => {
      if (suggest.length === 0 && searchtext !== "" && !resfound) {
        return <p>Search Content Not Found</p>;
      }

      return (
        <div className=" pt-40 p-20	">
          <div className="bg-white flex items-center justify-self-center rounded-full shadow-xl">
            <div className="rounded-l-full w-full  px-6 text-gray-700 leading-tight focus:outline-none">
              <label>Detective Game</label>

              <ul>
                {suggest.map((item, index) => {
                  return (
                    <div key={index}>
                      <li onClick={() => suggestedText(item)}>{item}</li>
                      {index !== suggest.length - 1 && <hr />}
                    </div>
                  );
                })}
              </ul>

              <div>
                <input
                  type="text"
                  placeholder="Search.."
                  className="search"
                  value={searchtext}
                  onChange={handleChange}
                />
                {getSuggestions()}
              </div>

              <div className="p-4">
                <button
                  className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
                  onClick={() => {
                    QuestionData.filter((e) => e.request === questions).length >
                    0
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
                    let id = QuestionData.findIndex(
                      (e) => e.request === questions
                    );
                    const Explaination = QuestionData[id]["answer"];
                    return console.log(Explaination);
                  })}
                  aa
                </h1>
              ) : null}
            </div>
          </div>
        </div>
      );
    };
  };
};
export default SearchBar;
