import React from "react";
import { bookingStats } from "../../util/data";

const BookingStatus = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {bookingStats.map((item) => (
        <div
          key={item.id}
          className="p-4 sm:p-5 lg:p-6 bookingStutsCard rounded-md sm:rounded-lg space-y-2 sm:space-y-3"
        >
      
          <div className="flex items-center gap-3">
            <span className="text-lg sm:text-xl lg:text-2xl">{item.icon}</span>
            <p className="detailsPhonText text-xs sm:text-sm lg:text-[14px] font-normal">
              {item.title}
            </p>
          </div>

  
          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold">
            {item.value}
          </h1>

          <p 
            className={`text-xs sm:text-sm lg:text-[14px] font-normal ${
              item.subText?.startsWith("+") 
                ? "text-red-400" 
                : "text-gray-400"
            }`}
          >
            {item.subText || ''}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BookingStatus;