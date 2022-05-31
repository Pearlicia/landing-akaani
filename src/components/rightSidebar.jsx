import React from 'react';

const RightSidebar = () => {
  return (
    <div className=" w-[300px] px-4 h-800 border-l flex flex-col  ">
        <div className="py-2" >
        <div className=" w-[250px] h-[250px] px-4 py-8 border-b  "  >
          <div className="font-bold" >INVITES </div>
          <div className="text-sm text-gray-500" >You have no invites.</div>
        </div>

        <div className=" w-[250px] h-[250px] px-4 py-8 border-b  "  >
          <div className="font-bold" >RECENT PAYMENTS </div>
          <div className="text-sm text-gray-500" >No Payment has been made. </div>
        </div>

        <div className=" w-[250px] h-[250px] px-4 py-8  "  >
          <div className="font-bold" >PREVIOUS ORDERS </div>
          <div className="text-sm text-gray-500" >You have created no order.</div>
        </div>
      </div>

    </div>
    
  )
}


export default RightSidebar;