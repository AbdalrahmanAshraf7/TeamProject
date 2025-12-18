import Style from "./Support.module.css"
import fly from "../../../public/images/butterflies(1).png"

export default function SupportUsHeader() {
  return<>

  <div className={`${Style.supportUsHeaderBg} h-screen md:object-cover object-cover object-right relative overflow-hidden flex  items-center`}>
    <div className='md:ms-52 ms-20 z-1'>
        <p className='text-white font-bold md:text-[40px] text-[20px]'>Seeking Truth & Transparency</p>
        <p className=' font-bold md:text-[30px] text-[15px]'>Made by al Quarisma</p>
        <p className='text-white  md:text-[20px] text-[10px]'>WHAT CAN WE HELP YOU WITH ?</p>
        <div className='md:w-[400px] w-[200px] md:ps-16 ps-5 rounded-lg py-2 bg-[#460ee1] mt-5 text-white'> search </div>
    </div>
    <img src={fly} alt="" className=' absolute right-0 top-0 ' />

  </div>
  
  
  </>
}