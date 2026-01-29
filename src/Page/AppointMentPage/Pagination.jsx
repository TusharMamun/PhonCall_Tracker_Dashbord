// StaticPagination.jsx
import React from 'react';
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';

const Pagination = () => {
  return (
    <div className="flex items-center justify-center space-x-2 p-4 mt-11 mb-4">

      <button
        className="flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium
                   text-gray-700 hover:bg-gray-100 hover:text-gray-900
                   transition-colors duration-200"
      >
        <ChevronLeft className="w-4 h-4 mr-1" />
        Previous
      </button>


      <div className="flex items-center space-x-1">
  
        <button
          className="min-w-[40px] px-3 py-2 rounded-md text-sm font-medium
                 text-blue-700"
        >
          1
        </button>


        <button
             className="min-w-[40px] px-3 py-2 rounded-md text-sm font-medium
                 text-blue-700"
        >
          2
        </button>

        <button
                    className="min-w-[40px] px-3 py-2 rounded-md text-sm font-medium
                 text-blue-700"
        >
          3
        </button>

        <button
          className="min-w-[40px] px-3 py-2 rounded-md text-sm font-medium
                 text-blue-700"
        >
          4
        </button>


        <button
                 className="min-w-[40px] px-3 py-2 rounded-md text-sm font-medium
                 text-blue-700"
        >
          5
        </button>

    
        <span className="px-3 py-2 text-gray-500">
          <MoreHorizontal className="w-4 h-4" />
        </span>

   
        <button
                 className="min-w-[40px] px-3 py-2 rounded-md text-sm font-medium
                 text-blue-700"
        >
          11
        </button>
      </div>

      <button
        className="flex items-center justify-centermin-w-[40px] px-3 py-2 rounded-md text-sm font-medium
                 text-blue-700"
      >
        Next
        <ChevronRight className="w-4 h-4 ml-1" />
      </button>
    </div>
  );
};

export default Pagination;