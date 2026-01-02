import NewsFooter from "./NewsFooter";
import NewsHeader from "./NewsHeader";
import Style from "./News.module.css"
export default function NewsMain() {
  return <>
  <div className={`${Style.newsBg} bg-[#f178b647] `}>
    <NewsHeader/>
    <NewsFooter/>
  </div>
  </>
}
