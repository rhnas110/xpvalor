import React from "react";

const Loading = () => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-4 place-items-center">
      {/* <div className="w-[250px] h-[350px] animate-pulse bg-gray-600"></div>
      <div className="w-[250px] h-[350px] animate-pulse bg-gray-600"></div>
      <div className="w-[250px] h-[350px] animate-pulse bg-gray-600"></div>
      <div className="w-[250px] h-[350px] animate-pulse bg-gray-600"></div> */}
      {[...Array(8).keys()].map((i) => {
        return (
          <div className="w-[250px] h-[350px] animate-pulse bg-gray-600" key={i}></div>
        )
      })}
    </div>
  );
};

export default Loading;
