import headerNews from "../../../public/images/hero_sec(2).png"
export default function NewsHeader() {
  return <>

 <div className="bg-[#f178b647]">
   <div className=' md:ms-16 m-14 mt-0 '>
   <h1 className='font-bold text-4xl pt-10'><span className='text-purple-600 '>Vision Of</span> Latest news</h1>
   
   <p className='my-6 text-xl'>Top headlines and In-depth reportind across the world</p>

  <div className='flex justify-between'>
    <div className='flex flex-col md:flex-row  gap-5'>
       <div className=' bg-purple-900 text-white rounded-lg px-7 py-2'>
        Top
       </div>
       <div className='bg-pink-600 text-white rounded-lg px-7 py-2'>
        World
       </div>
       <div className='bg-pink-600 text-white rounded-lg px-7 py-2'>
        Breaking News
       </div>
    </div>

    <div className='md:me-20 bg-purple-900 text-white rounded-lg h-10 w-36 md:h-12 md:w-64 text-center py-2'>
      search news
    </div>
  </div>
  </div>

  <div className="flex justify-center items-center">
    <img src={headerNews} alt="" className="md:w-[70%] w-[80%]" />
  </div>
 </div>
  
  </> 
}
