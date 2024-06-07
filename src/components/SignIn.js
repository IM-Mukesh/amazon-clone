import React, { useEffect, useState } from "react";
import logo from "./assets/logoBlack.png";
import { Link } from "react-router-dom";
import { ARROW_RIGHT, ARROW_DOWN } from "../utils/constants";

const SignIn = () => {
  const [need, setNeed] = useState(false);

  const toggleNeed = () => {
    setNeed(!need);
  };

  useEffect(() => {
    document.title = "Amazon Clone Sign In";
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

        <div className="form mt-5 flex flex-col border-2 border-neutral-200 py-4 px-6 rounded-lg shadow-sm shadow-neutral-300 w-[21rem]">
          <div className="heading">
            <h1 className="text-3xl font-medium">Sign in</h1>
          </div>
          <form className="mt-3">
            <label htmlFor="email" className="text-sm font-sans font-semibold">
              Email or mobile phone number
            </label>
            <input
              type="text"
              id="email"
              className="outline outline-none border-neutral-400 border rounded-sm w-full mt-1 py-1 focus:ring-2 focus:ring-sky-300 px-2"
              required
            />
            <div className="submit flex justify-center items-center bg-[#FFD814] w-full py-2 rounded-lg mt-5 cursor-pointer text-sm">
              <input
                type="submit"
                value="Continue"
                className="cursor-pointer"
              />
            </div>
          </form>
          <div className="extra-details mt-5">
            <h2 className="text-xs font-medium">
              By continuing, you agree to Amazon's{" "}
              <a
                href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940"
                target="blank"
                className="cursor-pointer text-sky-600"
              >
                Conditions of Use
              </a>{" "}
              and{" "}
              <a
                href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380"
                target="blank"
                className="cursor-pointer text-sky-600"
              >
                Privacy Notice.
              </a>
            </h2>
            <div
              className="needs flex text-xs text-sky-600 font-medium -ml-2 mt-6 cursor-pointer"
              onClick={toggleNeed}
            >
              <img src={need ? ARROW_DOWN : ARROW_RIGHT} alt="right arrow" />
              <h2 className="hover:underline hover:text-orange-500">
                Need help?
              </h2>
            </div>
            {need && (
              <div className="help-details ml-3 text-xs text-sky-600 font-medium flex flex-col">
                <a className="hover:underline hover:text-orange-500 cursor-pointer">
                  Forgot Password
                </a>
                <a className="mt-1 hover:underline hover:text-orange-500 cursor-pointer">
                  Other issues with Sign-In
                </a>
              </div>
            )}

            <div className="w-full h-[1px] bg-neutral-200 mt-6"></div>
            <div className="amazon-business">
              <h2 className="font-bold text-xs mt-4">Buying for work?</h2>
              <a
                href="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fbusiness%2Fregister%2Fcheck%2Fstatus%3Fref_%3Dab_welcome_bw_ckab_dsk%26originalRef%3Dab_reg_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_ab_reg_web_in&openid.mode=checkid_setup&marketPlaceId=A21TJRUUN4KGV&language=en_IN&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=ab_welcome_login_in&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&switch_account=signin&ref_=ab_welcome_bw_ap-sn_dsk&disableLoginPrepopulate=1"
                target="blank"
                className="hover:underline hover:text-orange-500 text-xs text-sky-600 font-medium"
              >
                Shop on Amazon Business
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-full mt-6">
          <div className="w-full h-[1px] bg-neutral-300"></div>
          <h2 className="text-xs text-neutral-600 w-full text-center">
            New to Amazon?
          </h2>
          <div className="w-full h-[1px] bg-neutral-300"></div>
        </div>

        <button className="bg-white w-full mt-3 text-sm rounded-lg py-2 shadow-sm shadow-neutral-300 border border-neutral-300 font-medium">
          <Link to="/signup">Create your Amazon account</Link>
        </button>

        <div className="mt-6 bg-neutral-200 w-64 h-[1px] shadow-xl shadow-neutral-300"></div>

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

export default SignIn;
