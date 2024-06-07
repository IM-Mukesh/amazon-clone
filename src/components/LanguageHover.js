import React from 'react'
import { INDIA } from '../utils/constants'

const LanguageHover = ({langOpen}) => {
  return (
    <div className='bg-black bg-opacity-30'>
        <div
            className={`language-hover h-[440px] w-[275px] fixed -mt-[3px] shadow-md shadow-neutral-400 -ml-2 bg-white rounded-md px-4 z-[999] ${langOpen? "" : "hidden"}`}
            
          >
            <div className="blank w-4 h-4 absolute rotate-45 ml-[38px] mt-[-0.25rem] bg-white"></div>
            <div className="lang-inner">
              <div className="eng flex items-center gap-1 mt-4">
                <div className="cursor-pointer eng1 contents-[''] w-4 h-4 rounded-full bg-white border-2 border-neutral-500 relative before:contents-[''] before:w-2 before:h-2 before:rounded-full before:bg-orange-500 before:absolute before:translate-x-[2px] before:translate-y-[2px]"></div>
                <h2 className="text-sm font-Work-Sans font-medium hover:text-orange-500 hover:underline hover:underline-offset-1">
                  English - EN
                </h2>
              </div>
              <div className="lang-line1 bg-neutral-300 h-[0.4px] w-full mt-4"></div>
              <div className="hindi flex items-center gap-1 mt-4">
                <div className="cursor-pointer eng1 contents-[''] w-4 h-4 rounded-full bg-white border-2 border-neutral-500 relative before:contents-[''] before:w-2 before:h-2 before:rounded-full before:hover:bg-orange-500 before:absolute before:translate-x-[2px] before:translate-y-[2px]"></div>
                <h2 className="text-sm font-Work-Sans font-medium hover:text-orange-500 hover:underline hover:underline-offset-1">
                  हिन्दी - HI
                </h2>
              </div>
              <div className="tamil flex items-center gap-1 mt-4">
                <div className="cursor-pointer eng1 contents-[''] w-4 h-4 rounded-full bg-white border-2 border-neutral-500 relative before:contents-[''] before:w-2 before:h-2 before:rounded-full before:hover:bg-orange-500 before:absolute before:translate-x-[2px] before:translate-y-[2px]"></div>
                <h2 className="text-sm font-Work-Sans font-medium hover:text-orange-500 hover:underline hover:underline-offset-1">
                  தமிழ் - TA
                </h2>
              </div>
              <div className="telugu flex items-center gap-1 mt-4">
                <div className="cursor-pointer eng1 contents-[''] w-4 h-4 rounded-full bg-white border-2 border-neutral-500 relative before:contents-[''] before:w-2 before:h-2 before:rounded-full before:hover:bg-orange-500 before:absolute before:translate-x-[2px] before:translate-y-[2px]"></div>
                <h2 className="text-sm font-Work-Sans font-medium hover:text-orange-500 hover:underline hover:underline-offset-1">
                  తెలుగు - TE
                </h2>
              </div>
              <div className="kannad flex items-center gap-1 mt-4">
                <div className="cursor-pointer eng1 contents-[''] w-4 h-4 rounded-full bg-white border-2 border-neutral-500 relative before:contents-[''] before:w-2 before:h-2 before:rounded-full before:hover:bg-orange-500 before:absolute before:translate-x-[2px] before:translate-y-[2px]"></div>
                <h2 className="text-sm font-Work-Sans font-medium hover:text-orange-500 hover:underline hover:underline-offset-1">
                  ಕನ್ನಡ - KN
                </h2>
              </div>
              <div className="malayalam flex items-center gap-1 mt-4">
                <div className="cursor-pointer eng1 contents-[''] w-4 h-4 rounded-full bg-white border-2 border-neutral-500 relative before:contents-[''] before:w-2 before:h-2 before:rounded-full before:hover:bg-orange-500 before:absolute before:translate-x-[2px] before:translate-y-[2px]"></div>
                <h2 className="text-sm font-Work-Sans font-medium hover:text-orange-500 hover:underline hover:underline-offset-1">
                  മലയാളം - ML
                </h2>
              </div>
              <div className="bangla flex items-center gap-1 mt-4">
                <div className="cursor-pointer eng1 contents-[''] w-4 h-4 rounded-full bg-white border-2 border-neutral-500 relative before:contents-[''] before:w-2 before:h-2 before:rounded-full before:hover:bg-orange-500 before:absolute before:translate-x-[2px] before:translate-y-[2px]"></div>
                <h2 className="text-sm font-Work-Sans font-medium hover:text-orange-500 hover:underline hover:underline-offset-1">
                  বাংলা - BN
                </h2>
              </div>
              <div className="marathi flex items-center gap-1 mt-4">
                <div className="cursor-pointer eng1 contents-[''] w-4 h-4 rounded-full bg-white border-2 border-neutral-500 relative before:contents-[''] before:w-2 before:h-2 before:rounded-full before:hover:bg-orange-500 before:absolute before:translate-x-[2px] before:translate-y-[2px]"></div>
                <h2 className="text-sm font-Work-Sans font-medium hover:text-orange-500 hover:underline hover:underline-offset-1">
                  मराठी - MR
                </h2>
              </div>
              <div className="mt-3">
                <a
                  href=""
                  className="text-sm font-Work-Sans font-medium ml-5 text-sky-600 hover:underline hover:underline-offset-1"
                >
                  Learn more
                </a>
              </div>
              <div className="lang-line1 bg-neutral-300 h-[0.4px] w-full mt-4"></div>
              <div className="imgAndText flex gap-2 items-center mt-3">
                <img src={INDIA} alt="Flag" class="w-4" />
                <h2 className="text-xs font-Work-Sans">
                  You are shopping on AmazonClone.in
                </h2>
              </div>
              <div className="countryOrRegion mt-3">
                <a
                  href="#"
                  className="font-Work-Sans text-sm ml-5 font-medium text-sky-600 hover:underline hover:underline-offset-1"
                >
                  Change country/region.
                </a>
              </div>
            </div>
          </div>
    </div>
  )
}

export default LanguageHover