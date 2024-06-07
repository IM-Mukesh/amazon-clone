import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const LocationModal = (props) => {
  const { isOpen, onClose } = props;
  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-40 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="mod fixed left-0 right-0 top-[23rem] lg:top-[20rem] flex justify-center place-items-center z-[1000] 500:mx-64 lg:mx-96 xl:mx-[35.9rem]">
        <div className="mod-bg">
          <div className="bg-white text-black h-[32rem] w-[24rem] -mt-44 rounded-lg z-[1002]">
            <div className="heading h-14 font-EmberBold flex justify-between items-center bg-neutral-300 rounded-tl-lg rounded-tr-lg px-6 border-b border-b-neutral-500">
              <h2>Choose Your Location</h2>
              <button className="close" onClick={onClose}>
                <CloseIcon sx={{ color: "#607274" }} />
              </button>
            </div>
            <div className="other-details px-6 py-4">
              <h5 className="text-xs text-neutral-700">
                Select a delivery location to see product availability and
                delivery options
              </h5>
              <div className="address mt-4" id="locate">
                <div className="bg-neutral-200 border border-neutral-600 rounded-md px-3 py-2 cursor-pointer">
                  <h2>
                    <span className="font-EmberBold">User</span>
                    Mukesh Kumar DLF2 Kolkata
                  </h2>
                </div>
                <div className="bg-sky-100 ring-2 ring-sky-900 hover:bg-neutral-200 border border-neutral-600 rounded-md px-3 py-2 cursor-pointer">
                  <h2>
                    <span className="font-EmberBold">User</span>
                    Balutunda, Nagri, Giridih Jharkhand 825167
                  </h2>
                  <h2 className="mt-3 text-neutral-700 font-EmberBold">
                    Default address
                  </h2>
                </div>
                <div className="bg-neutral-200 border border-neutral-600 rounded-md px-3 py-2 cursor-pointer mt-[2px]">
                  <h2>
                    <span className="font-EmberBold">User</span> THE UNITED
                    AGENCY, Laskarait Bazar Rd, Newtown, Chakpachuria, West
                    Bengal 700156
                  </h2>
                </div>
                <div className="mt-3">
                  <a
                    href="#"
                    className="text-sky-600 font-medium hover:text-orange-600 hover:underline-offset-1 hover:underline"
                  >
                    Add an address or pick-up point
                  </a>
                </div>
              </div>
              <div className="flex justify-center items-center before:contents-[''] before:w-10 before:h-[1px] before:bg-black after:contents-[''] after:w-10 after:h-[1px] after:bg-black mt-2 text-sm">
                <h2 className="px-2">or enter an Indian pincode</h2>
              </div>
              <div className="flex justify-between items-center gap-2 mt-3">
                <input
                  type="text"
                  className="outline-none focus:ring-2 focus:ring-blue-400 border-2 rounded-md border-neutral-500 w-full py-1"
                  id="pincodeBox"
                />
                <button
                  type="submit"
                  className="text-sm font-medium px-9 py-[6px] text-neutral-800 hover:bg-neutral-100 border-2 border-neutral-300 rounded-md shadow-md"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
