export default function ContactUsFooter() {


  return <>

  <div className="contactusfooter h-full">
    <div className="flex flex-col items-center pt-20">
        <h1 className="font-bold text-white text-4xl">Contact Us</h1>
    <span className="text-3xl">Get inTouch With US</span>
    </div>


    <div className="mt-14 ms-11">

        <div className="relative">
            <p className="font-bold text-2xl w-fit bg-transparent ">Fullname</p>
            <span className="bg-black p-3 absolute left-8 top-1 -z-10 blur-sm w-[100px]"></span>
            <input type="text" name="" id="" placeholder="Enter your full name" className="p-5 mt-7   bg-purple-500/30 rounded-lg opacity-35 selection:outline-0 focus:outline-0 shadow-lg md:w-[50%] w-[90%] placeholder:text-black" />
        </div>
        <div className="mt-10 relative">
            <p className="font-bold text-2xl w-fit bg-transparent">Email Address</p>
                        <span className="bg-black p-3 absolute left-8 top-1 -z-10 blur-sm w-[100px]"></span>

            <input type="email" name="" id="" placeholder="Enter your email address" className="p-5 mt-7   bg-purple-500/30 rounded-lg opacity-35 selection:outline-0 focus:outline-0 shadow-lg md:w-[50%] w-[90%] placeholder:text-black" />
        </div>
        <div className="mt-10 pb-11 relative">
            <p className="font-bold text-2xl w-fit bg-transparent">Message</p>
                        <span className="bg-black p-3 absolute left-8 top-1 -z-10 blur-sm w-[100px]"></span>

            <textarea placeholder="enter your message"  className="p-5 mt-7 min-h-[300px]   bg-purple-500/30 rounded-lg opacity-35 selection:outline-0 focus:outline-0 shadow-lg md:w-[50%] w-[90%] placeholder:text-black">
                
            </textarea>
        </div>




    </div>

  </div>
  
  </>
}
