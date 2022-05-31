import React from 'react';
import truck from '../assets/truck.svg'
import creditcard from '../assets/creditcard.svg'
import gift from '../assets/gift.svg'
import shop from '../assets/shop.svg'
import basket from '../assets/basket.svg'

const Profile = () => {
  return (
    <div className="p-3 py-4 w-full border h-screen relative" >
      <div className="flex justify-between py-2 my-4" >
        <h2 className="text-4xl font-bold mx-4" >Good Evening, Laura!</h2>
        <div class="relative">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input type="search" class="block p-3 pl-10 w-full text-sm text-gray-900 bg-none rounded-lg border border-gray-300 focus:ring-none focus:outline-none  "
            placeholder="Search Basket" />
        </div>
      </div>

      <div className="flex flex-wrap" >
        <div className="flex m-4 items-center border w-[250px] py-2 px-6 shadow-lg rounded-lg space-x-6" >
          <div className="w-12 h-12 bg-[#dfe4f7] border rounded-full flex justify-center items-center"  >
            <img src={truck} alt="logo" className="w-6 h-6" />
          </div>
          <div className=""  >
            <div className="text-sm"  >In-Transit Jobs </div>
            <div className="font-bold text-xl"  >0 </div>
          </div>
        </div>

        <div className="flex m-4 items-center border w-[250px] py-2 px-6 shadow-lg rounded-lg space-x-6" >
          <div className="w-12 h-12 bg-[#dfe4f7] border rounded-full flex justify-center items-center"  >
            <img src={creditcard} alt="logo" className="w-6 h-6" />
          </div>
          <div className=""  >
            <div className="text-sm"  >Total Paid </div>
            <div className="font-bold text-xl"  > $0.00 </div>
          </div>
        </div>

        <div className="flex m-4 items-center border w-[250px] py-2 px-6 shadow-lg rounded-lg space-x-6" >
          <div className="w-12 h-12 bg-[#dfe4f7] border rounded-full flex justify-center items-center"  >
            <img src={gift} alt="logo" className="w-6 h-6" />
          </div>
          <div className=""  >
            <div className="text-sm"  >Completed Jobs </div>
            <div className="font-bold text-xl"  >0 </div>
          </div>
        </div>
      </div>

      <div className="px-4 my-6 flex justify-between" >
        <h3 className="text-xl font-bold" >Baskets</h3>
        <button className="px-4 py-2 border rounded-lg bg-[#55999a] text-white " >Create basket</button>
      </div>

      <div className="" >
        <div className="border-b px-4 flex space-x-8" >
          <button className="py-2 border-b-2 border-[#55999a] font-semibold hover:text-[#55999a] hover:border-[#55999a] " >Paid</button>
          <button className="py-2 border-b-2 border-white font-semibold hover:text-[#55999a] hover:border-[#55999a]" >Pending</button>
          <button className="py-2 border-b-2 border-white font-semibold hover:text-[#55999a] hover:border-[#55999a]" >Completed</button>
        </div>
        <div className="flex flex-col justify-center items-center py-16" >
          <div className="w-16 h-16 bg-[#dfe4f7] border rounded-full flex flex-col justify-center items-center"  >
            <img src={shop} alt="logo" className="w-10 h-10" />
          </div>
          <p>No Paid Baskets, yet!</p>
        </div>
        </div>
        
        <div className='x-5 font-bold border bg-white text-xs flex items-center justify-center w-4 h-4 rounded-full absolute right-11 z-10 border ' >
          4
        </div>
       <div className="w-16 h-16 bg-[#55999a] mx-5 absolute right-4  border rounded-full flex justify-center items-center"  >
            <img src={basket} alt="basket" className="w-10 h-10" />
        </div>

    </div>
  )
}

export default Profile;