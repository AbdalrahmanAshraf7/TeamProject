import Style from "./Support.module.css"
import getStarted from "../../../public/images/getstrted.png"
import getStarted2 from "../../../public/images/getstrted(1).png"
import getStarted3 from "../../../public/images/getstrted(2).png"
import AskedQuestion from './AskedQuestion'


export default function SupportFooter() {
  return <>


   <div className={`${Style.supportUsFooterBg} h-full md:object-cover object-cover object-right relative  `} >
    <div className='md:flex-row flex flex-col justify-center items-center  p-5 gap-8 py-5'>
        <div className=''>
            <img src={getStarted} className='w-[200px]' alt="" />
        </div>
        <div className=''>
            <img src={getStarted2} className='w-[200px]' alt="" />
        </div>
        <div className=''>
            <img src={getStarted3} className='w-[200px]' alt="" />
        </div>

    
    </div>
    <AskedQuestion></AskedQuestion>





   </div>
  

  </>
   
}
