import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ad from "./assets/ad.png";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Navbar = () => {
  return (
    <div className="subheader bg-[#232F3E] w-full h-10 lg:flex justify-between items-center px-3 text-white text-[14px] font-medium z-10 relative hidden mt-16">
    
      <div class="flex gap-4">
        <div
          class="flex gap-1 cursor-pointer hover:border hover:border-white px-1 py-1"
          id="all"
        >
          <MenuIcon className="text-white mt-[1px]"/>
          <h2 className="mt-1">All</h2>
        </div>
        <div class="flex gap-3">
          <h2 class="cursor-pointer hover:border hover:border-white px-1 py-[9px]">
            Prime
          </h2>
          <h2 class="cursor-pointer hover:border hover:border-white px-1 py-[9px]">
            Today's Deal
          </h2>
          <h2 class="cursor-pointer hover:border hover:border-white px-1 py-[9px]">
            New Releases
          </h2>
          <h2 class="cursor-pointer hover:border hover:border-white px-1 py-[9px]">
            Books
          </h2>
          <h2 class="cursor-pointer hover:border hover:border-white px-1 py-[9px]">
            Buy Again
          </h2>
          <h2 class="cursor-pointer hover:border hover:border-white px-1 py-[9px]">
            Amazon miniTV
          </h2>
          <h2 class="cursor-pointer hover:border hover:border-white px-1 py-[9px]">
            Sell
          </h2>
          <h2 class="cursor-pointer hover:border hover:border-white px-1 py-[9px] hidden xl:flex">
            Amazon Pay
          </h2>
          <h2 class="cursor-pointer hover:border hover:border-white px-1 py-[9px] hidden xl:flex">
            Gift Cards
          </h2>
          <h2 class="cursor-pointer hover:border hover:border-white px-1 py-[9px] hidden 2xl:flex">
            Gift Ideas
          </h2>

          <h2 class="cursor-pointer hover:border hover:border-white px-1 py-[9px] hidden 2xl:flex">
            Coupons
          </h2>
          <h2 class="cursor-pointer hover:border hover:border-white px-1 py-[9px] hidden 2xl:flex">
            Gift Ideas
          </h2>
          <h2 class="cursor-pointer hover:border hover:border-white px-1 py-[9px] hidden 2xl:flex">
            Fashion
          </h2>
          <div class="cursor-pointer hover:border hover:border-white px-1 py-[9px] 2xl:hidden">
            <MoreHorizIcon />
          </div>
        </div>
      </div>
      <div className="advertise hover:border hover:border-white px-1 py-">
        <img src={ad} alt="Advertisement" className="w-80 cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
