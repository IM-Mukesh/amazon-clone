import React from "react";
import { Link } from "react-router-dom";

const AccountHover = ({ isAccOpen }) => {
  return (
    <div>
      <div
        className={`acc-hover h-[470px] w-[500px] fixed -mt-[3px] shadow-md shadow-neutral-400 -ml-[16rem] bg-white rounded-md px-6 z-[999] ${
          isAccOpen ? "" : "hidden"
        }`}
      >
        <div className="blank w-4 h-4 absolute rotate-45 ml-[342px] mt-[-0.25rem] bg-white"></div>
        <div className="sign-in flex flex-col justify-center items-center py-2">
          <button className="bg-[#FFD814] text-sm px-24 py-2 rounded-md">
            <Link to="/signin">Sign in</Link>
          </button>

          <h2 className="text-xs mt-[5px]">
            New Customer?{" "}
            <span className="text-[#36919F] hover:text-orange-600 cursor-pointer hover:underline hover:underline-offset-1">
              Start here.
            </span>
          </h2>
        </div>
        <div className="line w-full h-[0.1px] bg-neutral-200 mt-1"></div>
        <div className="two-sections flex gap-8 mt-3 text-[13px]">
          <div className="first-div flex flex-col">
            <div className="lists w-[12rem]">
              <h1 className="text-[1.12rem] font-bold">Your Lists</h1>
              <div className="shop mt-3 flex flex-col">
                <a
                  href=""
                  className="hover:text-orange-500 hover:underline hover:underline-offset-1"
                >
                  Alexa Shopping List
                </a>
                <span className="text-neutral-400">0 items</span>
              </div>
            </div>
            <div className="shop2 border-t border-neutral-200 border-b mt-3 py-3 flex flex-col">
              <a
                href=""
                className="hover:text-orange-500 hover:underline hover:underline-offset-1"
              >
                Shopping List
              </a>
              <a
                href=""
                className="hover:text-orange-500 hover:underline hover:underline-offset-1"
              >
                Art and Stuffs
              </a>
              <a
                href=""
                className="hover:text-orange-500 hover:underline hover:underline-offset-1"
              >
                Books I wanna read
              </a>
            </div>
            <div className="shop3 py-3 flex flex-col">
              <a
                href=""
                className="hover:text-orange-500 hover:underline hover:underline-offset-1"
              >
                Create a Wish List
              </a>
              <a
                href=""
                className="hover:text-orange-500 hover:underline hover:underline-offset-1"
              >
                Wish from Any Website
              </a>
              <a
                href=""
                className="hover:text-orange-500 hover:underline hover:underline-offset-1"
              >
                Baby Wishlist
              </a>
              <a
                href=""
                className="hover:text-orange-500 hover:underline hover:underline-offset-1"
              >
                Discover Your Style
              </a>
              <a
                href=""
                className="hover:text-orange-500 hover:underline hover:underline-offset-1"
              >
                Explore Showroom
              </a>
            </div>
          </div>
          <div className="second-div border-l border-neutral-200 pl-3 flex flex-col">
            <div className="lists w-[12rem]">
              <h1 className="text-[1.12rem] font-bold">Your Account</h1>
              <div className="shop mt-3 flex flex-col gap-1">
                <a
                  href=""
                  className="hover:text-orange-500 hover:underline hover:underline-offset-1"
                >
                  Your Account
                </a>
                <a
                  href=""
                  className="hover:text-orange-500 hover:underline hover:underline-offset-1"
                >
                  Your Orders
                </a>
                <a
                  href=""
                  className="hover:text-orange-500 hover:underline hover:underline-offset-1"
                >
                  Your Wish List
                </a>
                <a
                  href=""
                  className="hover:text-orange-500 hover:underline hover:underline-offset-1"
                >
                  Keep shopping for
                </a>
                <a
                  href=""
                  className="hover:text-orange-500 hover:underline hover:underline-offset-1"
                >
                  Your Recommendations
                </a>
                <a
                  href=""
                  className="hover:text-orange-500 hover:underline hover:underline-offset-1"
                >
                  Your Prime Membership
                </a>
                <a
                  href=""
                  className="hover:text-orange-500 hover:underline hover:underline-offset-1"
                >
                  Your Prime Video
                </a>
                <a
                  href=""
                  className="hover:text-orange-500 hover:underline hover:underline-offset-1"
                >
                  Your Subscribe & Save Items
                </a>
                <a
                  href=""
                  className="hover:text-orange-500 hover:underline hover:underline-offset-1"
                >
                  Memberships & Subscriptions
                </a>
                <a
                  href=""
                  className="hover:text-orange-500 hover:underline hover:underline-offset-1"
                >
                  Your Seller Account
                </a>
                <a
                  href=""
                  className="hover:text-orange-500 hover:underline hover:underline-offset-1"
                >
                  Content Library
                </a>
                <a
                  href=""
                  className="hover:text-orange-500 hover:underline hover:underline-offset-1"
                >
                  Devices
                </a>
                <a
                  href=""
                  className="hover:text-orange-500 hover:underline hover:underline-offset-1"
                >
                  Your Free Amazon Business <br></br>Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountHover;
