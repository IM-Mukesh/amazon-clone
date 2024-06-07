import React, { useState, useEffect } from "react";
import logo from "./assets/logo.png";
import HeaderMob from "./HeaderMob";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import CenterFocusStrongOutlinedIcon from "@mui/icons-material/CenterFocusStrongOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LocationModal from "./LocationModal";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { INDIA } from "../utils/constants";
import LanguageHover from "./LanguageHover";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import AccountHover from "./AccountHover";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchClicked, setSearchClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  //searchbar
  const searchBarClicked = () => {
    const search = document.querySelector(".header-search");
    setSearchClicked(true);
    search.classList.add("border-4", "border-amber-500", "rounded-[0.8rem]");
  };
  const searchBarDeselected = () => {
    const search = document.querySelector(".header-search");
    setSearchClicked(false);
    search.classList.remove("border-4", "border-amber-500", "rounded-[0.8rem]");
  };

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // const langOpen = () => {
  //   setIsLangOpen(true);
  // };

  const handleOutsideClick = (e) => {
    const search = document.querySelector(".header-search");
    //if search is selected and and the target of event is not on the searchbar but outside of the search bar then return the deselect function.
    //!e.target.closest('.header-search') is checking if the clicked element is outside the '.header-search' element. If the clicked element or any of its ancestors up the DOM tree is the search bar (or is inside the search bar), .closest will return that element, making the condition false. If the click happened outside (meaning .closest returns null, and the negation !null becomes true), the condition inside the if statement evaluates to true.
    if (search && !e.target.closest(".header-search")) {
      searchBarDeselected();
    }
  };

  return (
    <div>
      {/* header-mobile */}
      <HeaderMob />
      {/* header-desktop */}
      <header className="header-desktop hidden lg:flex justify-between items-center h-[4rem] w-full bg-[#131921] px-3 z-50 top-0 fixed">
        {/* logo */}
        <a
          href="/"
          className="header_logo hidden lg:flex text-white gap-[0.2rem] hover:border hover:border-white px-1 py-3 cursor-pointer"
        >
          <img
            src={logo}
            alt="logo"
            className="w-16 h-5 sm:w-20 sm:h-6 lg:w-24 lg:h-7"
          />
          <span className="font-semibold text-xs sm:text-sm lg:text-base">
            Clone.in
          </span>
        </a>
        {/* header-location */}
        <div className="address-section relative -mt-1" onClick={openModal}>
          <button
            className="location text-white flex justify-center items-center gap-1 hover:border hover:border-white px-1 py-2 cursor-pointer"
            id="address"
          >
            <div className="mt-3 text-lg">
              <PlaceOutlinedIcon fontSize="small" className="-mt-[4px]" />
            </div>
            <div className="leading-[0.95rem] flex flex-col items-start">
              <h2 className="text-xs text-neutral-400 font-medium font-EmberBold">
                Deliver to User
              </h2>
              <h2 className="text-[14px] font-bold font-EmberBold">
                City XXXXXX
              </h2>
            </div>
          </button>

        </div>
        {/* header-search */}
        <button className="header-search flex" onClick={searchBarClicked}>
          <div className="search-select">
            <select
              name="category"
              id="cat"
              class="w-10 py-[0.6rem] border-t border-t-neutral-400 outline-yellow-600 bg-zinc-300 hover:bg-zinc-400 rounded-tl-md rounded-bl-md border-r-2 border-neutral-400 text-sm cursor-pointer"
            >
              <option value="1" className="bg-white font-EmberBold">
                All Categories
              </option>
              <option value="2" className="bg-white font-EmberBold">
                Alexa Skills
              </option>
              <option value="3" className="bg-white font-EmberBold">
                Amazon Devices
              </option>
              <option value="4" className="bg-white font-EmberBold">
                Amazon Fashion
              </option>
              <option value="5" className="bg-white font-EmberBold">
                Amazon Pharmacy
              </option>
              <option value="6" className="bg-white font-EmberBold">
                Appliances
              </option>
              <option value="7" className="bg-white font-EmberBold">
                Apps & Games
              </option>
              <option value="8" className="bg-white font-EmberBold">
                Audible Audiobooks
              </option>
              <option value="9" className="bg-white font-EmberBold">
                Baby
              </option>
              <option value="10" className="bg-white font-EmberBold">
                Beauty
              </option>
              <option value="11" className="bg-white font-EmberBold">
                Books
              </option>
              <option value="12" className="bg-white font-EmberBold">
                Car & Motorbike
              </option>
              <option value="13" className="bg-white font-EmberBold">
                Clothing & Accessories
              </option>
              <option value="14" className="bg-white font-EmberBold">
                Collectibles
              </option>
              <option value="15" className="bg-white font-EmberBold">
                Computers & Accessories
              </option>
              <option value="16" className="bg-white font-EmberBold">
                Electronics
              </option>
              <option value="17" className="bg-white font-EmberBold">
                Furniture
              </option>
              <option value="18" className="bg-white font-EmberBold">
                Garden & Outdoors
              </option>
              <option value="19" className="bg-white font-EmberBold">
                Gift Cards
              </option>
              <option value="20" className="bg-white font-EmberBold">
                Grocery & Gourmet Foods
              </option>
              <option value="21" className="bg-white font-EmberBold">
                Health & Personal Care
              </option>
              <option value="22" className="bg-white font-EmberBold">
                Home & Kitchen
              </option>
              <option value="23" className="bg-white font-EmberBold">
                Industrial & Scientific
              </option>
              <option value="24" className="bg-white font-EmberBold">
                Jewellery
              </option>
              <option value="25" className="bg-white font-EmberBold">
                Kindle Store
              </option>
              <option value="26" className="bg-white font-EmberBold">
                Luggage & Bag
              </option>
              <option value="27" className="bg-white font-EmberBold">
                Luxury Beauty
              </option>
              <option value="28" className="bg-white font-EmberBold">
                Movies & TV Shows
              </option>
              <option value="29" className="bg-white font-EmberBold">
                Music/option
              </option>
              <option value="30" className="bg-white font-EmberBold">
                Musical Instruments
              </option>
              <option value="31" className="bg-white font-EmberBold">
                Office Products
              </option>
              <option value="32" className="bg-white font-EmberBold">
                Pet Supplies
              </option>
              <option value="33" className="bg-white font-EmberBold">
                Prime Video
              </option>
              <option value="34" className="bg-white font-EmberBold">
                Shoes & Handbags
              </option>
              <option value="35" className="bg-white font-EmberBold">
                Software
              </option>
              <option value="36" className="bg-white font-EmberBold">
                Sports, Fitness & Outdoors
              </option>
              <option value="37" className="bg-white font-EmberBold">
                Subscribe & Save
              </option>
              <option value="38" className="bg-white font-EmberBold">
                Tools & Home Improvement
              </option>
              <option value="39" className="bg-white font-EmberBold">
                Toys & Games
              </option>
              <option value="40" className="bg-white font-EmberBold">
                Under ₹500
              </option>
              <option value="41" className="bg-white font-EmberBold">
                Video Games
              </option>
              <option value="42" className="bg-white font-EmberBold">
                Watches
              </option>
            </select>
          </div>
          <div className="input-items w-[100%] xl:w-[500px] 2xl:w-[650px] flex bg-white justify-between items-center">
            <input
              type="text"
              name=""
              id="input"
              className="w-[100%] h-10 px-3 placeholder-slate-800 outline-none"
              placeholder="Search AmazonClone.in"
              autocomplete="off"
            />
            <button className="lens-icon px-2 -mt-[2px]">
              <CenterFocusStrongOutlinedIcon
                color="action"
                className="cursor-pointer"
              />
            </button>
          </div>
          <div className="search-icon bg-[#F3A847] hover:bg-[#ee9a2c] text-2xl py-[0.2rem] px-3 border border-yellow-500 rounded-tr-md rounded-br-md cursor-pointer">
            <button>
              <SearchOutlinedIcon className="-mt-[7px]" sx={{ fontSize: 28 }} />
            </button>
          </div>
        </button>
        {/* language */}
        <div
          className="language flex flex-col cursor-pointer"
          onMouseEnter={() => setIsLangOpen(true)}
          onMouseLeave={() => setIsLangOpen(false)}
        >
          <div className="language-items gap-1 flex justify-center items-center hover:border hover:border-white px-1 py-2 relative">
            <div className="flag">
              <img src={INDIA} alt="Flag" className="w-5" />
            </div>
            <h2 class="text-sm text-white">EN</h2>
            <ArrowDropDownRoundedIcon className="text-white mt-2 -ml-2" />
          </div>
{isLangOpen && <LanguageHover langOpen={isLangOpen} />}
          
        </div>
        {/* account */}
        <div
          className="account flex flex-col cursor-pointer"
          onMouseEnter={() => setIsAccountOpen(true)}
          onMouseLeave={() => setIsAccountOpen(false)}
        >
          <div className="acc-name text-white flex flex-col leading-[0.95rem] hover:border hover:border-white px-1 py-2 cursor-pointer">
            <h2 class="text-xs text-neutral-200 font-medium font-EmberBold">
              Hello, sign in
            </h2>
            <div class="flex">
              <h1 class="text-[14px] font-bold font-EmberBold">
                Account & Lists
              </h1>
              <ArrowDropDownRoundedIcon className="text-white -ml-[1px] -mt-[2px]" />
            </div>
          </div>
          {isAccountOpen && <AccountHover isAccOpen={isAccountOpen}/>}
        </div>
        {/* order-details */}
        <div className="orders">
          <div className="text-white leading-[0.95rem] hover:border hover:border-white px-1 py-4 cursor-pointer">
            <h2 className="text-xs text-neutral-400 font-medium font-EmberBold -mt-[8px]">
              Returns
            </h2>
            <h1 className="text-[14px] font-bold font-EmberBold">& Orders</h1>
          </div>
        </div>
        {/* cart */}
        <div className="cart">
          <Link to="/cart" className="text-white hover:border hover:border-white px-2 py-3 cursor-pointer flex justify-center">
            <ShoppingCartIcon sx={{ fontSize: 32 }}/>
            <span className="absolute -mt-4 font-EmberBold text-amber-500 -ml-2">
              0
            </span>
            <h1 className="text-[14px] font-bold font-EmberBold mt-3">Cart</h1>
          </Link>
        </div>
      </header>
      <Navbar/>
      <LocationModal isOpen={isModalOpen} onClose={closeModal}/>
    </div>
  );
};

export default Header;
