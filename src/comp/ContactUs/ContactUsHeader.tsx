import flies from "../../../public/images/butterflies(2).png"
export default function ContactUsHeader() {
  return <>
  <div className="contactus h-screen flex flex-col justify-center  ">

   <div className="md:ms-40 ms-20 z-2">
     <p className="font-bold text-white text-3xl my-4">
         Seeking Truth & Transparency
    </p>
    <p className="font-bold text-white text-3xl my-4">
          Made  by <span className="text-pink-300">QUARISMA</span>
    </p>
    <p className="font-bold text-white text-xl my-4">
         “News is the first draft of history.”
    </p>
   </div>

   <img src={flies} className="w-[300px] right-0 absolute z-1 " alt="" />


    
  </div>
  
  </>
}
