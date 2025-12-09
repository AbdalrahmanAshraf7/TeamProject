import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import sliderImg from "../../../public/images/news1.png";
// import styles from './About.module.css';
import bgImg from "../../../public/images/img3.png";
import vision1 from"../../../public/images/confidential_icon.png"
import vision2 from"../../../public/images/cooperation_icon.png"
import vision3 from"../../../public/images/empathy_icon.png"
import printer from "../../../public/images/truth-concept-arrangement-with-different-elements 1.png"
import review from "../../../public/images/review.png"
import papers from "../../../public/images/papers.png"

export default function AboutNews() {
  const [emblaRef2, emblaApi2]:any = useEmblaCarousel({ loop: true });
  const [selectedIndex2, setSelectedIndex2] = useState(0);
  const [slidesCount2, setSlidesCount2] = useState(0);

  const [emblaRef, emblaApi]:any = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();
  const scrollTo = (index:any) => emblaApi && emblaApi.scrollTo(index);

  const scrollPrev2 = () => emblaApi2 && emblaApi2.scrollPrev();
  const scrollNext2 = () => emblaApi2 && emblaApi2.scrollNext();
  const scrollTo2 = (index:any) => emblaApi2 && emblaApi2.scrollTo(index);

 
  useEffect(() => {
    if (!emblaApi) return;

    setSlidesCount(emblaApi.slideNodes().length);

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi2) return;

    setSlidesCount2(emblaApi2.slideNodes().length);

    const onSelect = () => {
      setSelectedIndex2(emblaApi2.selectedScrollSnap());
    };

    emblaApi2.on("select", onSelect);
    onSelect();

    return () => emblaApi2.off("select", onSelect);
  }, [emblaApi2]);

  return (
    <>
    <div className="flex flex-col"  style={{ backgroundImage: `url(${bgImg})` ,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",}}>
           <div className="flex flex-col items-center my-4 overflow-x-hidden overflow-scroll ">
        <div className="flex flex-col gap-4">
          <div className="md:px-10 px-48 py-5">
            <p className="font-bold text-[40px] text-[rgba(93,95,239,1)]">Our News</p>
            <p className="md:text-[24px] text-[12px] font-medium">
              explore more about World, believe that
              <span className="font-semibold">
                {" "}
                “As there are a thousand thoughts lying within a man that he does not know till he takes up the pen to write.”
              </span>
            </p>
          </div>

       
          <div className="relative md:w-[700px] w-[300px]  mx-auto my-5 md:px-0 ">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex ">
                {[1, 2, 3, 4].map((_, index) => (
                  <div key={index} className="min-w-full flex items-center justify-center  flex-shrink-0">
                    <img src={sliderImg} className="md:w-[500px] w-[300px] rounded-lg" />
                  </div>
                ))}
              </div>
            </div>

            
            <button
              className="absolute left-[-50px] top-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded shadow md:block hidden"
              onClick={scrollPrev}
            >
              ◀
            </button>

            <button
              className="absolute right-[-50px] top-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded shadow md:block hidden"
              onClick={scrollNext}
            >
              ▶
            </button>

           
            <div className="flex justify-center gap-2 mt-12">
              {Array.from({ length: slidesCount }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo(i)}
                  className={`w-10 h-10 rounded-full transition-all ${
                    selectedIndex === i
                      ? "bg-pink-400 scale-110"
                      : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>
        </div>




        <div className="flex flex-col mt-24 bg-red-950/20 md:h-screen items-center justify-center border-2 border-pink-500 border-r-0 border-l-0 ">
            <div className="md:px-10 px-20">
                <div className="font-bold text-[40px] text-[rgba(93,95,239,1)]">
                Mission &Vision
            </div>
            <div>
                <p className="md:text-[30px] text-[15px] font-semibold">we pursue truth with independence and empath. we believe journalism should be accessible , data-informed and grounded in the lived experiences of the communties we served 
and Making of Arab Society's Charisma</p>
            </div>
            </div>
            <div className="flex md:flex-row flex-col my-3 justify-center items-center md:gap-10 gap-5 text-white mt-10 px-20">
                <div className="flex flex-col items-center bg-[rgba(237,163,198,1)] p-3 rounded-lg"><img src={vision3} className="w-[100px]" alt={""} />
                <p className="font-bold ">independence and empath</p>
                
                </div>
                <div className="flex flex-col items-center p-3 rounded-lg bg-[rgba(93,95,239,1)]"><img src={vision1} className="w-[100px]" alt={""} />
                <p className="font-bold">accessible , data-informed</p>
                
                </div>
                <div className="flex flex-col items-center bg-[rgba(237,163,198,1)] p-3 rounded-lg"><img src={vision2} className="w-[100px]" alt={""} />
                <p className="font-bold">Arab Society's Charisma</p>
                
                </div>

            </div>
        </div>


       <div className="p-5 my-24 ">
         <div className="flex flex-col items-center  ">
            <div className="font-bold text-[40px] text-[rgba(93,95,239,1)]">
                Our Goals
            </div>
            <div className=" flex md:flex-row flex-col items-center  mt-5 md:gap-14 gap-5 relative">
                <div className="grow-3"><img src={printer} alt="" className="w-[300px] z-2" /></div>
                <div className=" w-[500px] flex items-center z-2">
                    <p className="md:text-[24px] text-[10px] md:px-10 px-28  ">
                    be number one across the Arab world  introduce several new innovations in the field of journalism and media, as we aim to lead a media revolution from various aspects open wide the doors of fame for talents
                    </p>
                </div>
                <img src={papers} alt="" className=" absolute opacity-50 right-[-300px]  bottom-0 z-1  " />

            </div>
        </div>
       </div>











           <div className="p-5 mt-24 h-screen ">
         <div className="flex flex-col items-center  ">
            <div className="font-bold md:text-[40px] text-[15px] text-[rgba(93,95,239,1)] md:px-0 px-10">
               What our valuable Readers say about us.
            </div>




            <div className="relative  md:w-[700px] w-[300px] mx-auto my-5 md:px-0  ">
            <div className="overflow-hidden" ref={emblaRef2}>
              <div className="flex ">
                {[1, 2].map((_, index) => (<>

                <div key={index} className="min-w-full flex items-center justify-center  flex-shrink-0">
                    <img src={review} className="md:w-[500px] w-[300px]  rounded-lg" />
                  </div>
                
                </>
                  
                ))}
              </div>
            </div>

            
            <button
              className="absolute left-[-50px] top-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded shadow md:block hidden"
              onClick={scrollPrev2}
            >
              ◀
            </button>

            <button
              className="absolute right-[-50px] top-1/2 -translate-y-1/2 bg-white px-2 py-1 rounded shadow md:block hidden"
              onClick={scrollNext2}
            >
              ▶
            </button>

           
            <div className="flex justify-center gap-2 mt-12">
              {Array.from({ length: slidesCount2 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => scrollTo2(i)}
                  className={`w-10 h-10 rounded-full transition-all ${
                    selectedIndex2 === i
                      ? "bg-pink-400 scale-110"
                      : "bg-gray-300"
                  }`}
                ></button>
              ))}
            </div>
          </div>

            
        </div>
       </div>













      </div>
















    </div>
   
    </>
  );
}
