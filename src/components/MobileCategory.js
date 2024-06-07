import React from "react";
import Category from "./CategoryImg";

const MobileCategory = () => {
  return (
    <div className="h-24 mx-3 text-white flex items-center">
      <div className="w-[100%] h-full overflow-x-scroll overflow-y-hidden flex gap-8 md:gap-10 no scrollbar scroll-smooth">
        {Category.map((item) => {
          return (
            <div className="flex flex-col justify-center itms-center gap-1">
              <img
                src={item.img}
                className="bg-cover inline-block w-48 h-10 sm:h-[2.6rem] md:w-10 mt-3"
              />
              <h2 className="text-black text-xs">{item.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MobileCategory;
