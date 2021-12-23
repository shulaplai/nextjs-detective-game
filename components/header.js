import React, { useEffect, useState } from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className=" flex	 justify-center items-center">
      <div class="mt-12 ml-20 basis-1/2">
        <div className="text-gray-800 font-semi bold text-4xl	">
          你已登入 偵探xqc
        </div>
        <div>您可在此搜查案件編號G134566的資料</div>
      </div>

      <div className="mt-12 ml-20 text-gray-800 font-bold text-5xl	">P.D.A</div>

      <div class="mt-12  basis-1/4">
        <Image
          src="/../public/logo.svg"
          alt="Picture"
          width={200}
          height={100}
        />
      </div>
    </div>
  );
};

export default Header;
