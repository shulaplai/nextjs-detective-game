import React, { useEffect, useState } from "react";
import { AiFillQuestionCircle } from "react-icons/ai";


const HelpIcon = () => {
   const [showModal, setShowModal] = React.useState(true);
  return (
    <>
      <button
        className=" bg-blue-500 text-white active:bg-blue-600 mx-20 p-8 rounded shadow hover:shadow-md outline-none focus:outline-none ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <AiFillQuestionCircle />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="	 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className=" bg-slate-400 flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className=" text-2xl font-semibold">給偵探的信</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-lg leading-relaxed">
                    朋友呀我在此請求你的幫助
                    <br />
                    這神秘的案件已經變得越來越令人費解了
                    <br />
                    如果不能解決方案件的話恐怕我未來都會夜不能寐
                    對這案件牽腸掛肚
                    <br />
                    直至我死去的那一天吧
                    <br /> 雖然你已退出江湖想平地地度過餘生
                    <br />
                    但我希望你能看在我們多年交情的份上
                    最後一次用你嘅推理技巧解開這次的案件
                    <br /> 所有的資料我已經上傳
                    <br />
                    在一些資料後面我也加上了我的個人分析和感想
                    <br />
                    希望那些分析能夠幫到你 <br /> 偵探千鳥
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-slate-500  text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    關閉
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}


export default HelpIcon;
