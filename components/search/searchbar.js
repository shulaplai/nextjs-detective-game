import React, { useState } from "react";
// import { getMongodbQuestion } from "../../lib/api/mongodb.js";
// import question from "../question.js";
import { QuestionData } from "../data.js";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [explain, setExplain] = useState(false);
  // const [detail, setDetail] = React.useState("");

  const onChangeHandler2 = () => {
    setExplain(true);
  };
  // useEffect(() => {
  //   QuestionData.forEach((item, index) => {
  //     let id = QuestionData.findIndex((e) => e.request === inputValue);
  //       const Explaination = QuestionData[id]["answer"];return Explaination
  //   }, [explain]);
  // });
  function GetData() {
    for (let i = 0; i < QuestionData.length; i++) {
      if (!inputValue ) {
        return null;
      }
      if (QuestionData[i].request === inputValue) {
        return QuestionData[i].answer;
      }
    }
  }

  return (
    <div className=" pt-20 p-20	">
      <div className="bg-white w-full flex items-center justify-self-center rounded-full shadow-xl">
        <Autocomplete
          id="highlights-demo"
          isOptionEqualToValue={(option, value) => option.id === value.id}
          className="rounded-full w-full	px-6  text-gray-700  focus:outline-none"
          
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          options={QuestionData}
          getOptionLabel={(option) => option.request}
          renderInput={(params) => (
            <TextField {...params} label="Question" margin="normal" />
          )}
          renderOption={(props, option, { inputValue }) => {
            const matches = match(option.request, inputValue);
            const parts = parse(option.request, matches);

            return (
              <li {...props}>
                <div>
                  {parts.map((part, index) => (
                    <span
                      key={index}
                      style={{
                        fontWeight: part.highlight ? 700 : 400,
                      }}
                    >
                      {part.text}
                    </span>
                  ))}
                </div>
              </li>
            );
          }}
        />

        <div className="p-4">
          <button
            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center"
            onClick={() => {
              QuestionData.filter((e) => e.request === inputValue).length > 0
                ? onChangeHandler2()
                : null;
            }}
          >
            <AiOutlineSearch />
          </button>
        </div>
      </div>
      <div className="	flex  justify-center items-center">
        <div className="box-border h-full w-screen mt-20 mx-12 p-28 border-4 ">
          {explain ? (
            <div className="text-justify font-semibold	tracking-wide	leading-relaxed	">
              <GetData></GetData>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
