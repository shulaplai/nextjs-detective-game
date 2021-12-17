import React, { useEffect, useState } from "react";

const Header = () => {
  return (
    <div className="bg-slate-400">
      <div className="bg-slate-400 flex	 justify-center items-center">
        <div className="text-gray-800 font-semi bold text-4xl	">你好 偵探</div>
        <br />
      </div>{" "}
      <div className="flex mt-16	 justify-center items-center">
        <p className="text-gray-800 font-semi bold text-3xl	">
          在下列的資料中找尋線索 以解開案件的真相
        </p>{" "}
      </div>
    </div>
  );
};

export default Header;
