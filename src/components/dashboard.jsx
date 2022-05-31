import React from 'react';
import logo from '../assets/logo.svg'
import profile from '../assets/profile.svg'
import basket from '../assets/basket.svg'
import history from '../assets/history.svg'
import back from '../assets/back.svg'

const Dashboard = () => {
  return (
    <div className=" w-[300px] px-4 h-800 border-r flex flex-col  ">
      <div className=" py-2 my-4 ">
        <img src={logo} alt="logo" />
      </div>
      <div className="my-10" >
        <div className=" flex flex-row space-x-3 my-2 py-3 rounded-lg hover:px-3 hover:bg-[#55999a] hover:text-white hover:font-semibold  ">
          <img src={profile} alt="logo" className=" w-6 h-6 " />
          <div className=""> Profile </div>
        </div>

        <div className=" flex flex-row space-x-3 my-2 py-3 px-3 bg-[#55999a] text-white rounded-lg hover:px-3 hover:bg-[#55999a] hover:text-white hover:font-semibold ">
          <img src={basket} alt="basket" className=" w-6 h-6 " />
          <div className=""> Baskets </div>
        </div>

        <div className=" flex flex-row space-x-3 my-2 py-3 rounded-lg hover:px-3 hover:bg-[#55999a] hover:text-white hover:font-semibold   ">
          <img src={history} alt="history" className=" w-6 h-6 " />
          <div className=""> Order History </div>
        </div>
      </div>

      <div className="flex flex-col absolute bottom-1 items-center" >
        <div className="w-12 h-12 flex items-center justify-center text-2xl rounded-full mt-4 bg-[#55999a] text-white font-semibold " >LE</div>
        <div className="text-lg font-bold" >Laura Edson</div>
        <div className="text-sm text-gray-400" >lauraedson@work.com</div>
        <div className="w-10 h-10 my-4  border rounded-lg flex justify-center items-center"  >
          <img src={back} alt="logo" className="w-6 h-6" />
        </div>

        
      </div>
    </div>
  )
}

export default Dashboard;