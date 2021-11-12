import React, { useEffect, useState } from "react";
import { AiOutlineBook } from "react-icons/ai";
import AnswerSheet from "./answersheet.js"


const AnswerIcon = () => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className=" my-4	justify-center bg-blue-500 text-white active:bg-blue-600 mx-20 p-8 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <AiOutlineBook />
      </button>
      {showModal ? (
        <div>
          <div className="justify-center items-center  overflow-visible overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="  relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className=" border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">AnswerSheet</h3>
              
                </div>
                {/*body*/}
                <div className=" relative p-6 flex-auto">
                  <div className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    <AnswerSheet></AnswerSheet>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                 
               </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
export default AnswerIcon;
