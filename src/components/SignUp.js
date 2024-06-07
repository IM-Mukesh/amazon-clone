import React, { useEffect, useState } from "react";
import logo from "./assets/logoBlack.png";
import { Link } from "react-router-dom";
import { ARROW_RIGHT } from "../utils/constants";

const SignUp = () => {
  useEffect(() => {
    document.title = "Amazon Clone Registration";
  });
  return (
    <div className="bg-white flex flex-col justify-center items-center py-4 px-4 sm:px-10 md:px-36 lg:px-52 overflow-x-hidden">
      <div className="flex flex-col justify-center items-center px-20">
        <div className="logo">
          <Link to="/" className="cursor-pointer flex gap-1">
            <img src={logo} alt="logo" className="w-24 lg:w-24 lg:h-7" />
            <span className="font-semibold text-sm lg:text-base">Clone.in</span>
          </Link>
        </div>

        <div className="form mt-5 flex flex-col border-2 border-neutral-200 py-4 px-6 rounded-lg shadow-sm shadow-neutral-300 w-[21rem] md:w-[23rem]">
          <div className="heading">
            <h1 className="text-3xl">Create Account</h1>
          </div>
          <form className="mt-3">
            <div className="name">
              <label htmlFor="name" className="text-sm font-sans font-semibold">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="outline outline-none border-neutral-400 border rounded-sm w-full mt-1 py-1 focus:ring-2 focus:ring-sky-300 px-2 placeholder:text-neutral-500 placeholder:font-sans placeholder:text-sm"
                placeholder="First and last name"
                autoFocus
                required
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="mobile"
                className="text-sm font-sans font-semibold"
              >
                Mobile number
              </label>
              <div className="flex gap-4">
                <select
                  name="country"
                  id="country"
                  className="border border-neutral-300 shadow-md rounded-lg h-8 mt-1 text-xs px-1 font-medium"
                >
                  <option value="IN">IN +91</option>
                </select>

                <input
                  type="text"
                  id="mobile"
                  className="outline outline-none border-neutral-400 border rounded-sm w-full mt-1 py-1 focus:ring-2 focus:ring-sky-300 px-2 placeholder:text-neutral-500 placeholder:font-sans placeholder:text-sm"
                  placeholder="Mobile number"
                  required
                />
              </div>
            </div>
            <div className="pass mt-3">
              <label
                htmlFor="password"
                className="text-sm font-sans font-semibold"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="outline outline-none border-neutral-400 border rounded-sm w-full mt-1 py-1 focus:ring-2 focus:ring-sky-300 px-2 placeholder:text-neutral-500 placeholder:font-sans placeholder:text-sm"
                placeholder="At least 6 characters"
                required
              />
              <p className="flex gap-2 text-xs items-center">
                <div className="i font-bold text-sky-600 text-sm mt-2">i</div>
                Password must be at least 6 characters.
              </p>
            </div>

            <p className="mt-3 text-xs w-72 font-medium text-neutral-600">
              To verify your number, we will send you a text message with a
              temporary code. Message and data rates may apply.
            </p>

            <div className="submit flex justify-center items-center bg-[#FFD814] w-full py-2 rounded-lg mt-6 cursor-pointer text-sm">
              <input
                type="submit"
                value="Verify mobile number"
                className="cursor-pointer"
              />
            </div>
            <div className="w-full h-[1px] bg-neutral-200 mt-6"></div>
          </form>
          <div className="extra-details">
            <div className="amazon-business">
              <h2 className="font-bold text-xs mt-4">Buying for work?</h2>
              <a
                href="https://www.amazon.in/business/register/org/landing?ref_=ap_altreg_ab"
                target="blank"
                className="hover:underline hover:text-orange-500 text-xs text-sky-600 font-medium"
              >
                Create a free business account
              </a>
              <div className="other-details flex items-center justify-center">
                <div className="mt-6 bg-neutral-200 w-64 h-[1px] shadow-xl shadow-neutral-300"></div>
              </div>

              <div className="acc-details mt-5">
                <div className="one flex items-center gap-1">
                  <h2 className="text-sm">Already have an account? </h2>
                  <div className="flex items-center">
                    <Link
                      to="/signin"
                      className="hover:underline hover:text-orange-500 text-sm text-sky-600 font-medium"
                    >
                      Sign in{" "}
                    </Link>
                    <img src={ARROW_RIGHT} alt="arrow" className="mt-1" />
                  </div>
                </div>
                <div className="two mt-5">
                  <h2 className="text-xs font-medium">
                    By continuing, you agree to Amazon's{" "}
                    <a
                      href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940"
                      target="blank"
                      className="cursor-pointer text-sky-600 hover:underline hover:text-orange-500"
                    >
                      Conditions of Use
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380"
                      target="blank"
                      className="cursor-pointer text-sky-600 hover:underline hover:text-orange-500"
                    >
                      Privacy Notice.
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-neutral-200 w-[120%] h-[2px] shadow-xl shadow-neutral-600"></div>


        <div className="footer-part">
          <div className="part1 flex gap-4 mt-6">
            <a
              href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_cou?ie=UTF8&nodeId=200545940"
              target="blank"
              className="text-xs text-sky-600 font-medium hover:underline hover:text-orange-500"
            >
              Conditions of Use
            </a>
            <a
              href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_desktop_footer_privacy_notice?ie=UTF8&nodeId=200534380"
              target="blank"
              className="text-xs text-sky-600 font-medium hover:underline hover:text-orange-500"
            >
              Privacy Notice
            </a>
            <a
              href="https://www.amazon.in/gp/help/customer/display.html?ie=UTF8&nodeId=508510"
              target="blank"
              className="text-xs text-sky-600 font-medium hover:underline hover:text-orange-500"
            >
              Help
            </a>
          </div>
          <div className="part2 mt-4 text-center">
            <h2 className="text-xs tracking-wider">
              AmazonClone Made with ❤️ in India
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
