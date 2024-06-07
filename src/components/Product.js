import React from "react";

function Product({ title, Box1 }) {
  return (
    <div className="product h-[22rem] w-[22rem] flex flex-col py-5">
      <div className="first-div">
        <div className="product-head px-4">
          <h2 className="text-[20px] font-bold">{title}</h2>
        </div>
        <div className="product-items p-4 grid grid-cols-2 gap-3  cursor-pointer">
          {Box1.map((val, index) => (
            <div key={index}>
              <div>
                <img src={val.image} alt="Box-image" className="relative" />
              </div>

              <h2 className="text-xs tracking-wide">{val.detail}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Product;
