import React from "react";
import Cards from "./Cards";

const Background = () => {
  return (
    <div className="bg-gradient-to-r bg-cover bg-no-repeat  from-[#00000033] to-transparent  px-6 py-6 shadow-lg  h-full  bg-pack-Mountain mx-auto mx-w-[1512px]">
      <div className="flex flex-col py-60 lg:flex-row mx-w-[1512px] justify-center ">
        <div className="w-40 flex flex-col justify-center ">
          <h1 className=" -rotate-90 fixed  font-Lato text-[14px] leading-normal font-normal text-[#ffff]">
            02. - WHY US
          </h1>
        </div>
        <div className=" flex flex-col gap-[40px] items-center mx-auto justify-center  ">
          <h1 className="flex justify-center w-full font-Lato text-[40px] leading-normal font-bold text-[#ffff]">
            It’s Our Culture That Makes Us Different
          </h1>
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Background;
