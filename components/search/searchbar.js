import React, { useState } from "react";
// import { getMongodbQuestion } from "../../lib/api/mongodb.js";
// import question from "../question.js";
import { QuestionData } from "../data.js";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
const SearchBar = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [explain, setExplain] = useState(false);
  // const [detail, setDetail] = React.useState("");

  const onChangeHandler2 = () => {
    setExplain(true);
  };
  // useEffect(() => {
  //   questionReqest.forEach((item, index) => {
  //     let id = questionReqest.findIndex((e) => e.request === inputValue);
  //       const Explaination = questionReqest[id]["answer"];return Explaination
  //   }, [explain]);
  // });

  const questionReqest = [
    {
      request: "who are you?",
      answer: "john smith",
    },
    {
      request: "a",
      answer:
        "john smith dfeergergtrtrgtrrtgtrgtrgrtgtrgrtgtrgtrtgrtgrtgrgtdvfgnuuijui",
    },
    {
      request: "where are you",
      answer: "john smith",
    },
    {
      request: "what are you",
      answer: "john smith",
    },
    {
      request: "How are you",
      answer: "john smith",
    },
    {
      request: "why do you",
      answer: "john smith",
    },
  ];
  return (
    <div className=" pt-40 p-20	">
      <div className="bg-white flex items-center justify-self-center rounded-full shadow-xl">
        <Autocomplete
          id="highlights-demo"
          isOptionEqualToValue={(option, value) => option.id === value.id}
          className="rounded-l-full w-full  px-6 text-gray-700 leading-tight focus:outline-none"
          sx={{ width: 300 }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          options={questionReqest}
          getOptionLabel={(option) => option.request}
          renderInput={(params) => (
            <TextField {...params} label="Highlights" margin="normal" />
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
              questionReqest.filter((e) => e.request === inputValue).length > 0
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
          <div>
            {questionReqest.forEach((item, index) => {
              let id = questionReqest.findIndex(
                (e) => e.request === inputValue
              );
              let detail = questionReqest[id]["answer"];

              console.log(detail);
              return detail;
            })}
            a
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default SearchBar;
