import React from 'react';
import backbutton from '../assets/bak.svg'
import basket from '../assets/basket.svg'
import coco from '../assets/coco.svg'
import good from '../assets/good.svg'

const Cartc = () => {
  return (
    <div className="w-[400px] px-4 h-500 border-l flex flex-col" >
      <div className="flex flex-row py-2 my-4" >
        <div>
          <img src={backbutton} alt="basket" className="w-5 h-5" />
        </div>
        <h5 className="text-2xl font-bold mx-4" >My cart</h5>
        <div className='x-5 font-bold border bg-white text-xs flex items-center justify-center w-4 h-4 rounded-full absolute right-9 z-10 border ' >
          4
        </div>
        <div className="w-12 h-12 bg-[#55999a] mx-5 absolute right-4  border rounded-full flex justify-center items-center"  >
            <img src={basket} alt="basket" className="w-6 h-6" />
        </div>
        
          
      </div>

      <div className="flex flex-wrap space-between my-1" >
        <div className="flex space-between items-center bg-[#97c7be] border h-[80px] w-[350px] py-2 px-2 shadow-lg rounded-lg space-x-6" >
          <div className="flex flex-row mx-2 space-x-9 px-2" >
            <div className="w-10 h-10 bg-[#dfe4f7] border rounded-full flex justify-center items-center"  >
              <img src={coco} alt="coco" className="w-10 h-10" />
            </div>
            <div className=""  >
              <div className="text-xs flex-1"  >Okazi Leaves </div>
              <div className="font-bold text-xs"  >$30</div>
            </div>
            <div className=" flex flex-row space-x-1 mx-2 my-2 py-2 w-25 h-7 px-3 bg-white text-black rounded-lg hover:font-semibold ">
              <span className="flex flex-1 flex-row text-xs"> 1 kg </span>
              <img src={good} alt="good" className=" w-2 h-2 " />
            </div>

            <div className="w-5 h-5 flex px-2 absolute right-9 items-center justify-center text-xs  -pr-5 mx-8 mt-4  " ></div>
            <div className="w-5 h-5 flex px-2 absolute right-6 z-10 items-center justify-center text-xs rounded-full -pr-5 mx-8 mt-4 bg-[#55999a] text-white font-semibold " >M</div>


          </div>
        </div>
        </div>

        <div className="flex flex-wrap space-between my-1" >
        <div className="flex space-between items-center bg-[#97c7be] border h-[80px] w-[350px] py-2 px-2 shadow-lg rounded-lg space-x-6" >
          <div className="flex flex-row mx-2 space-x-9 px-2" >
            <div className="w-10 h-10 bg-[#dfe4f7] border rounded-full flex justify-center items-center"  >
              <img src={coco} alt="coco" className="w-10 h-10" />
            </div>
            <div className=""  >
              <div className="text-xs flex-1"  >Okazi Leaves </div>
              <div className="font-bold text-xs"  >$120</div>
            </div>
            <div className=" flex flex-row space-x-1 mx-2 my-2 py-2 w-25 h-7 px-3 bg-white text-black rounded-lg hover:font-semibold ">
              <span className="flex flex-1 flex-row text-xs"> 4 kg </span>
              <img src={good} alt="good" className=" w-2 h-2 " />
            </div>

            <div className="w-5 h-5 flex px-2 absolute right-9 items-center justify-center text-xs  -pr-5 mx-8 mt-4  " ></div>
            <div className="w-5 h-5 flex px-2 absolute right-6 z-10 items-center justify-center text-xs rounded-full -pr-5 mx-8 mt-4 bg-[#3F4246] text-white font-semibold " >R</div>

          </div>
        </div>
        </div>

        <div className="flex flex-wrap space-between my-1" >
        <div className="flex space-between items-center bg-[#97c7be] border h-[80px] w-[350px] py-2 px-2 shadow-lg rounded-lg space-x-6" >
          <div className="flex flex-row mx-2 space-x-9 px-2" >
            <div className="w-10 h-10 bg-[#dfe4f7] border rounded-full flex justify-center items-center"  >
              <img src={coco} alt="coco" className="w-10 h-10" />
            </div>
            <div className=""  >
              <div className="text-xs flex-1"  >Rice Beacon Lea... </div>
              <div className="font-bold text-xs"  >$50</div>
            </div>
            <div className=" flex flex-row space-x-1 mx-2 my-2 py-2 w-25 h-7 px-3 bg-white text-black rounded-lg hover:font-semibold ">
              <span className="flex flex-1 flex-row text-xs"> 1 kg </span>
              <img src={good} alt="good" className=" w-2 h-2 " />
            </div>

            <div className="w-5 h-5 flex px-2 absolute right-9 items-center justify-center text-xs rounded-full -pr-5 mx-8 mt-4 bg-[#277292] text-white font-semibold " >M</div>
            <div className="w-5 h-5 flex px-2 absolute right-6 z-10 items-center justify-center text-xs rounded-full -pr-5 mx-8 mt-4 bg-[#D1B378] text-white font-semibold " >P</div>

          </div>
        </div>
        </div>

        <div className="flex flex-wrap space-between my-1" >
        <div className="flex space-between items-center bg-[#97c7be] border h-[80px] w-[350px] py-2 px-2 shadow-lg rounded-lg space-x-6" >
          <div className="flex flex-row mx-2 space-x-9 px-2" >
            <div className="w-10 h-10 bg-[#dfe4f7] border rounded-full flex justify-center items-center"  >
              <img src={coco} alt="coco" className="w-10 h-10" />
            </div>
            <div className=""  >
              <div className="text-xs flex-1"  >Efo Stew Ingre... </div>
              <div className="font-bold text-xs"  >$45</div>
            </div>
            <div className=" flex flex-row space-x-1 right-4 mx-2 my-2 py-2 w-25 h-7 px-3 bg-white text-black rounded-lg hover:font-semibold ">
              <span className="flex flex-1 flex-row text-xs"> 1 kg </span>
              <img src={good} alt="good" className=" w-2 h-2  flex items-center " />
            </div>
            <div className="w-5 h-5 flex px-2 absolute right-9 items-center justify-center text-xs  -pr-5 mx-8 mt-4  " ></div>
            <div className="w-5 h-5 flex px-2 absolute right-6 z-10 items-center justify-center text-xs rounded-full -pr-5 mx-8 mt-4 bg-[#0A1E3D] text-white font-semibold " >M</div>

          </div> 
        </div>
        </div>


        <div className='flex flex-row justify-between space-x-9 mt-40 bottom-1'>
          <div className=""  >
                <div className="text-xs flex-1"  >TOTAL </div>
                <div className="font-bold text-xs"  >$2,560</div>
            </div>
          
            <div className='flex right-4 items-end' >
              <button className='bg-[#55999a] flex flex-1 items-end focus-hover ml-30 text-white font-bold px-2 py-2'>DONE SHOPPING</button>
            </div>
            
        </div>

        
       

        

        

        
        
      </div>

      

    
  )
}

export default Cartc;