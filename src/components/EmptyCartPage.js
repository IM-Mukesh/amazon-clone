import React, {useEffect} from "react";
import cart from "./assets/cart.png";
import desktopCart from "./assets/desktop-cart.jpg";
import { Link } from "react-router-dom";

const EmptyCartPage = () => {
  useEffect(() => {
    document.title = "Amazon Clone - Shopping Cart";
  }, [])
  return (
    <div className="bg-[#dcdede]">
      <div className="mobile-cart md:hidden flex flex-col justify-center items-center">
        <div className="cart-img bg-white w-full flex flex-col justify-center items-center py-8">
          <img src={cart} alt="empty-cart" className="w-48 sm:w-64 md:w-full" />
          <h2 className="text-lg sm:text-xl font-bold">Your Amazon Cart is empty</h2>
          <a
            href="https://www.amazon.in/gp/aw/gb/ref=cart_empty_deals"
            target="blank"
            className="text-sky-700 font-medium"
          >
            Shop today's deals
          </a>
          <div className="signAccount flex flex-col mt-6 gap-4">
          <button className="bg-[#FFD814] w-80 py-3 rounded-lg">
            <Link to="/signin">Sign in to your account</Link>
          </button>
          <button className="bg-white w-80 rounded-lg py-3 shadow-md shadow-neutral-300 border border-neutral-300">
            <Link to="/signup">Sign up now</Link>
          </button>
        </div>
        </div>
        <div className="continue-button mt-8 py-6 bg-white w-full flex justify-center items-center">
            <button className="bg-[#FFD814] w-80 py-3 rounded-lg">
                <Link to="/">
                    Continue Shopping
                </Link>
            </button>
        </div>
      </div>

      <div className="desktop-cart hidden md:flex px-6 py-10">
            <div className="bg-white w-full h-96 flex justify-center items-center gap-10 px-6 lg:px-0">
                <div className="img">
                    <img src={desktopCart} alt="cart" className="w-96" />
                </div>
                <div className="details flex flex-col">
                <h2 className="text-2xl font-bold">Your Amazon Cart is empty</h2>
                <a
            href="https://www.amazon.in/gp/aw/gb/ref=cart_empty_deals"
            target="blank"
            className="text-sky-700 font-medium"
          >
            Shop today's deals
          </a>
          <div className="signdetails flex mt-7 gap-3">
          <button className="bg-[#FFD814] w-56 py-1  rounded-lg">
            <Link to="/signin">Sign in to your account</Link>
          </button>
          <button className="bg-white w-40 rounded-lg py-1 shadow-md shadow-neutral-300 border border-neutral-300">
            <Link to="/signup">Sign up now</Link>
          </button>
          </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default EmptyCartPage;
