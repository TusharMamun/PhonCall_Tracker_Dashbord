import React from "react";
import { FaEdit } from "react-icons/fa";

const UpdateProfilePage = () => {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-8 py-6 md:py-8">
      <h4 className="text-lg sm:text-xl font-normal text-white mb-4 sm:mb-6">
        Profile Image
      </h4>

      {/* Profile Image Section */}
      <div className="flex items-end gap-3 sm:gap-4">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-[102px] md:h-[102px]">
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-gray-300">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
          <button className="absolute bottom-1 right-1 editBgcolor p-1.5 sm:p-2 rounded-md cursor-pointer z-40">
            <FaEdit className="text-white text-sm sm:text-base md:text-[18px]" />
          </button>
        </div>
        
 
      </div>


      <div className="mt-6 sm:mt-8 md:mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-14">

          <div className="space-y-4 sm:space-y-6">
            <div>
              <label className="text-base sm:text-lg md:text-xl font-medium text-white mb-1 sm:mb-2 block">
                Full Name
              </label>
              <input
                type="text"
                className="text-white text-sm sm:text-base md:text-[16px] font-normal w-full border border-gray-300 rounded-lg sm:rounded-md py-2.5 sm:py-3 px-3 sm:px-4 my-1 sm:my-2 placeholder-gray-300 inputBlokingFild bg-transparent"
                placeholder="Jane D."
              />
            </div>
            
            <div>
              <label className="text-base sm:text-lg md:text-xl font-medium text-white mb-1 sm:mb-2 block">
                Store Name
              </label>
              <input
                type="text"
                className="text-white text-sm sm:text-base md:text-[16px] font-normal w-full border border-gray-300 rounded-lg sm:rounded-md py-2.5 sm:py-3 px-3 sm:px-4 my-1 sm:my-2 placeholder-gray-300 inputBlokingFild bg-transparent"
                placeholder="Ubreakfix Store D."
              />
            </div>
          </div>


          <div className="space-y-4 sm:space-y-6">
            <div>
              <label className="text-base sm:text-lg md:text-xl font-medium text-white mb-1 sm:mb-2 block">
                Email
              </label>
              <input
                type="email"
                className="text-white text-sm sm:text-base md:text-[16px] font-normal w-full border border-gray-300 rounded-lg sm:rounded-md py-2.5 sm:py-3 px-3 sm:px-4 my-1 sm:my-2 placeholder-gray-300 inputBlokingFild bg-transparent"
                placeholder="jane@gmail.com"
              />
            </div>
            
            <div>
              <label className="text-base sm:text-lg md:text-xl font-medium text-white mb-1 sm:mb-2 block">
                Store Address
              </label>
              <input
                type="text"
                className="text-white text-sm sm:text-base md:text-[16px] font-normal w-full border border-gray-300 rounded-lg sm:rounded-md py-2.5 sm:py-3 px-3 sm:px-4 my-1 sm:my-2 placeholder-gray-300 inputBlokingFild bg-transparent"
                placeholder="123 Main Street, New York"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center mt-12 sm:mt-16 md:mt-20">
        <button
          className="
            w-full
            max-w-[280px]
            sm:max-w-[320px]
            md:max-w-[373px]
            h-[44px]
            sm:h-[48px]
            md:h-[52px]
            bg-green-500
            hover:bg-green-600
            text-white
            text-lg
            sm:text-xl
            md:text-2xl
            font-bold
            rounded-xl
            sm:rounded-[14px]
            md:rounded-[16px]
            px-4
            transition-all
            duration-200
            shadow-lg
            hover:shadow-xl
          "
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default UpdateProfilePage;