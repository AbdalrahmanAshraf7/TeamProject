import Story from "../../../public/images/Rectangle 106.png"

export default function AboutUsStory() {
  return <>
  <div className="  md:py-36 md:px-10 py-16 px-5 rounded-lg overflow-hidden    ">
    <div  className="relative  ">
    <img src={Story} alt="" className='md:w-full rounded-lg     ' />
    <div className=" inset-0 absolute flex flex-col justify-center ms-10   ">
        <div className="bg-[rgba(93,95,239,1)] w-fit md:py-3 md:px-8 py-1.5 px-4 rounded-2xl font-bold text-white ">
            Our Story
        </div>
        <div className="py-3 font-bold md:text-[40px] text-[20px]">
            Beyond the Headlines
        </div>
        <p className="md:text-[30px] text-[12px] font-semibold text-white">
            It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, we believe that reality and maturity are core for truth
        </p>
        <div className="flex gap-4 mt-4">

            <button className="shadow-[5px_5px_5px_rgba(0,0,0,0.9)] md:py-3 md:px-14 py-3 px-10 text-white bg-white/20  rounded-lg cursor-pointer font-bold">Learn More</button>
            <button className="md:py-3 md:px-20 py-1.5 px-10 text-white  bg-[rgba(93,95,239,1)] rounded-lg cursor-pointer font-bold ">Latest news</button>
            
        </div>

    </div>
    </div>

  </div>

  </>
}


