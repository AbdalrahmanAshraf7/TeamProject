import styles from './About.module.css';
import aboutHeader from "../../../public/images/freepik__the-style-is-candid-image-photography-with-natural__43058 1.png"
import aboutHeaderButterfly from "../../../public/images/butterflies.png"

export default function About() {
  return <>

  <div className={` ${styles.test} relative `}>
    <img src={aboutHeader} alt="" className='md:w-full  h-screen md:object-cover   object-cover object-right ' />
    <div className={` inset-0 absolute flex    justify-center    ${styles["header-layer-about"]}`}>
      <div className='  flex  grow-2 items-center px-11  '>
        <div className='flex flex-col md:ms-52 z-1 '>
          <p className='font-bold md:text-[64px] text-[40px] text-[rgba(241,120,182,1)]' >
          who we are
        </p>
        <p className='font-semibold md:text-[32px] text-[17px] text-white tracking-[0.1px] md:leading-[58px] leading-[20px] md:w-[830px] '>
          It has one principle and one motto that can be read individually, meaning each word on its own, or as a whole, in a single sentence, whether from right to left or left to right:  (Elegance, Personality, Strength)
        </p>
        </div>

        <img src={aboutHeaderButterfly} alt="" className=' absolute right-0 w-[600px]' />
      </div>
      
    </div>
  </div>

 
  
  </>
}
