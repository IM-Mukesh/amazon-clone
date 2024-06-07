import React, { useEffect, useState } from "react";
import logo from "./assets/logo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PersonIcon from "@mui/icons-material/Person";
import CenterFocusStrongOutlinedIcon from "@mui/icons-material/CenterFocusStrongOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LocationModal from "./LocationModal";
import MobileCategory from "./MobileCategory";
import { Link } from "react-router-dom";

const HeaderMob = () => {
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  //searchbar
  const searchBarClicked = () => {
    const searchBar = document.querySelector(".headerSearch");
    setIsSearchClicked(true);
    searchBar.classList.add("border-4", "border-amber-500", "rounded-[0.8rem]");
  };
  const searchBarDeselected = () => {
    const searchBar = document.querySelector(".headerSearch");
    setIsSearchClicked(false);
    searchBar.classList.remove("border-4", "border-amber-500", "rounded-[0.8rem]");
  };

  //location-modal
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleOutsideClick = (e) => {
    const searchBar = document.querySelector(".header-search");
    //if search is selected and and the target of event is not on the searchbar but outside of the search bar then return the deselect function.
    //!e.target.closest('.header-search') is checking if the clicked element is outside the '.header-search' element. If the clicked element or any of its ancestors up the DOM tree is the search bar (or is inside the search bar), .closest will return that element, making the condition false. If the click happened outside (meaning .closest returns null, and the negation !null becomes true), the condition inside the if statement evaluates to true.
    if (searchBar && !e.target.closest(".headerSearch")) {
      searchBarDeselected();
    }
  };

  return (
    <div className="lg:hidden">
      <header className="mobile flex flex-col gap-2 h-[8rem] w-full bg-[#131921] px-3 z-[999] top-0 fixed">
        <div className="head1 flex justify-between">
          <a
            href="/"
            className="header_logo flex text-white gap-[0.2rem] hover:border hover:border-white px-1 py-3 cursor-pointer"
          >
            <img src={logo} alt="logo" className="w-24 h-7" />
            <span className="font-semibold">Clone.in</span>
          </a>
          <div className="second-sec flex justify-center items-center">
            <div className="signin hover:border hover:border-white px-1 py-3">
              <button className="sign-in-btn rounded-md text-white">
              <Link to="/signin">
              Sign in
              </Link>
              </button>
              <PersonIcon sx={{ color: "white", fontSize: 32 }} />
            </div>
            <div className="cart">
              <Link
                to="/cart" 
                className="text-white hover:border hover:border-white px-2 py-3 cursor-pointer flex justify-center"
              >
                <ShoppingCartOutlinedIcon sx={{ fontSize: 32 }} />
                <span className="absolute -mt-4 cart-bold text-amber-500 ml-4 font-bold">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="head2">
          <button
            className="headerSearch flex w-full" onClick={searchBarClicked}
          >
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
            <div className="input-items w-[100%] xl:w-[720px] flex bg-white justify-between items-center">
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
                <SearchOutlinedIcon
                  className="-mt-[7px]"
                  sx={{ fontSize: 28 }}
                />
              </button>
            </div>
          </button>
        </div>
      </header>
      <nav className="subheader bg-[#232F3E] w-full h-14 lg:hidden mt-32">
        <button
          className="location text-white flex items-center gap-1 hover:border hover:border-white py-1 px-2 cursor-pointer w-full"
          id="address"
          onClick={openModal}
        >
          <div className="mt-3 text-lg">
            <PlaceOutlinedIcon fontSize="small" className="-mt-[14px]" />
          </div>
          <div className="leading-[0.95rem] flex items-start gap-2">
            <h2 className=" text-neutral-300 font-medium font-EmberBold">
              Deliver to User
            </h2>
            <h2 className="text-[14px] font-bold font-EmberBold">
              City XXXXXX
            </h2>
          </div>
        </button>
      </nav>
      <MobileCategory/>
      <LocationModal isOpen={isModalOpen} onClose={closeModal} className="mod"/>
    </div>
  );
};

export default HeaderMob;
