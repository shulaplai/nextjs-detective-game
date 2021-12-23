import React, { useEffect, useState } from "react";
import AnswerIcon from "../components/answersheet/answericon.js";
import HelpIcon from "../components/helpicon.js";
const Footer = () => {
  return (
    <div className="flex flex-row mt-8">
      <div class="basis-1/4">
        <HelpIcon></HelpIcon>
      </div>
      <div class="basis-1/4">
        <AnswerIcon></AnswerIcon>
      </div>
      <div class="basis-1/2 text-gray-800 font-bold text-4xl inline-block align-bottom">
        Private Detective Association
      </div>
    </div>
  );
};

export default Footer;
