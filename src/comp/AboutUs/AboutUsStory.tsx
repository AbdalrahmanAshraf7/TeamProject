import Story from "../../../public/images/Rectangle 106.png"

export default function AboutUsStory() {
  return <>
  <div className="  md:py-36 md:px-10 py-10 px-5 rounded-lg overflow-hidden    ">
    <div  className="relative  ">
    <img src={Story} alt="" className='md:w-full rounded-lg     ' />
    <div className=" inset-0 absolute flex flex-col justify-center md:ms-10 ms-5    ">
        <div className="bg-[rgba(93,95,239,1)] md:text-xl w-fit md:py-3 text-[10px]  md:px-8 py-2 px-4 rounded-lg font-bold text-white ">
            Our Story
        </div>
        <div className="md:py-3 font-bold md:text-[40px] text-[15px]">
            Beyond the Headlines
        </div>
        <p className="md:text-[30px] text-[7px] font-semibold text-white">
            It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
        </p>
        <div className="flex items-center gap-4 mt-4">

            <button className="shadow-[5px_5px_5px_rgba(0,0,0,0.9)] md:text-2xl py-2 md:py-3 md:px-14  px-10 text-[10px] text-white bg-white/20  rounded-lg cursor-pointer font-bold">Learn More</button>
            <button className="md:py-3 md:px-20 py-2  px-7 md:text-2xl text-[10px] text-white  bg-[rgba(93,95,239,1)] rounded-lg cursor-pointer font-bold ">Latest news</button>
            
        </div>
 
    </div>
    </div>

  </div>

  </>
}


