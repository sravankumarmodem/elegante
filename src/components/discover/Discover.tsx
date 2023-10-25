import rightArrow from "@/assets/arrow-right-circle.png";
import StarRating from "./StarRating";
import { ImgList } from "./itemList";
import useMediaQuery from "@/hooks/useMediaQury";
import { useState } from "react";

type Props = {
  title: string;
  imgListItems: Array<ImgList>;
  sublist: boolean;
};



const Discover = ({ title, imgListItems, sublist }: Props) => {
  const tabletScreens = useMediaQuery("(min-width: 769px)");
  const mobileScreens = useMediaQuery("(min-width: 432px)");
  const [count, setCount]=useState<number>(0)
  const [listMap, setListmap]=useState<any>(imgListItems.slice(0,1));


  const handileOnclick=(a:number)=>{
    if(count+a<imgListItems.length && (count+a)>-1 ){
      
      setCount(count+a)
      setListmap(imgListItems.slice(count+a,count+a+1))
    }
    if(count+a=== -1){
      
      setCount(imgListItems.length-1)
      setListmap(imgListItems.slice(imgListItems.length-1,imgListItems.length))
      
    }
    if(count+a===imgListItems.length){
    
      setCount(0)
      setListmap(imgListItems.slice(0,0+1))
    }
  }
  
  return (
    <>
    { tabletScreens && mobileScreens &&
      <div className="relative w-[1921px] whitespace-nowrap">
      <div className="h-[343px] bg-1018200D mt-[140px] relative overflow-visible">
        <div className="absolute top-[66px] inset-0">
          <div className="h-[50px]    tracking-[3.5px]   font-openSans font-bold text-unnamed-color-101820 text-[35px] flex items-center justify-center flex-col">
            <p className="flex items-center justify-center ">
              {/* DISCOVER */}
              {title}
            </p>
            {sublist && (
              <div className="flex items-center  mx-[140px] justify-center gap-[56px] mt-[33px] ">
                <p className="  h-[24px] text-base  tracking-[1.8px] ">
                  SPECI
                  <span className="underline underline-offset-[16px]  decoration-wavy decoration-FFAA4D  ">
                    AL OF
                  </span>
                  FERS
                </p>
                <p className="font-openSans text-unnamed-color-101820 font-normal h-[24px] text-base">
                  TRENDING
                </p>
                <p className="font-openSans text-unnamed-color-101820 font-normal h-[24px] text-base">
                  NEW IN
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
     <div className="mx-[140px]">
     <div className="flex  round-md justify-center  items-center absolute top-[180px]">
        <img
          src={rightArrow}
          className="h-[52px] w-[52px] mr-[68px] flex items-center rotate-180 justify-center fill-12181F   "
        />
        <div className="gap-[70px] flex ">
        {imgListItems.map((item: ImgList, index) => (
          <div key={index}>
            <img src={item.imge} alt="" className="w-[297px] h-[311px]" />
            <div className="flex flex-col  items-start justify-center">
              <p className=" font-openSans text-1018204D font-bold  text-[14px] mt-[20px]">
                {item.productType}
              </p>
              <p className=" font-openSans text-101820 font-normal h-[28px] text-[18px] mt-[11px]">
                {item.title}
              </p>

              {item.afterDiscount && (
                <div className="flex item-start justify-center gap-[11.68px]">
                  <p className=" font-openSans text-E03C31  h-[28px] text-[24px] font-semibold mt-[5px]">
                    {" "}
                    <span className="font-light">&#8358;</span>{" "}
                    {item.afterDiscount}
                  </p>
                  {item.price && (
                    <p className=" font-openSans text-707070 flex item-center justify-center font-semibold line-through  h-[24px] text-[18px]  mt-[9.5px]">
                      {" "}
                      <span className="font-light">&#8358;</span> {item.price}
                    </p>
                  )}
                </div>
              )}
              {!item.afterDiscount && (
                <p className=" font-openSans text-101820  h-[28px] text-[24px] font-semibold mt-[5px]">
                  {" "}
                  <span className="font-light">&#8358;</span> {item.price}
                </p>
              )}
              <StarRating rating={item.statrs} />
            </div>
          </div>
        ))}
        </div>
        <img
          src={rightArrow}
          className="ml-[68px] h-[52px] w-[52px] flex items-center justify-center  fill-12181F"
        />
        {/* <div>
                <ArrowRightCircleIcon/>
            </div> */}
      </div>
     </div>

    </div>
    }

    {/* ===========small========== */}
    {!tabletScreens &&
      <div className={  mobileScreens  ? "relative w-[768px] whitespace-nowrap" : "relative w-[390px] whitespace-nowrap"}>
      <div className="h-[343px] bg-1018200D mt-[40px] relative overflow-visible">
        <div className="absolute top-[66px] inset-0">
          <div className="h-[50px]    tracking-[1.5px]   font-openSans font-bold text-unnamed-color-101820 text-[25px] flex items-center justify-center flex-col">
            <p className="flex items-center justify-center ">
              {/* DISCOVER */}
              {title}
            </p>
            {sublist && (
              <div className="flex items-center  mx-[40px] justify-center gap-[10px] mt-[33px] ">
                <p className="  h-[24px] text-[18px]  tracking-[0 .8px] ">
                  SPECI
                  <span className="underline underline-offset-[16px]  decoration-wavy decoration-FFAA4D  ">
                    AL OF
                  </span>
                  FERS
                </p>
                <p className="font-openSans text-unnamed-color-101820 font-normal h-[24px] text-[18px]">
                  TRENDING
                </p>
                <p className="font-openSans text-unnamed-color-101820 font-normal h-[24px] text-[18px]">
                  NEW IN
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
     <div className="flex items-center justify-center">
     <div className="flex  round-md justify-center  items-center absolute top-[180px]">
        <img
          src={rightArrow}
          className="h-[52px] w-[52px] mr-[30px] flex items-center rotate-180 justify-center fill-12181F   "
          onClick={()=>handileOnclick(-1)}
        />
        <div className="gap-[30px] flex ">
        {listMap.map((item: ImgList, index:any) => (
          <div key={index}>
            <img src={item.imge} alt="" className={mobileScreens ? "w-[297px] h-[311px]" : "w-[290px] h-[210px]"  }/>
            <div className="flex flex-col  items-start justify-center">
              <p className=" font-openSans text-1018204D font-bold  text-[14px] mt-[20px]">
                {item.productType}
              </p>
              <p className=" font-openSans text-101820 font-normal h-[28px] text-[18px] mt-[11px]">
                {item.title}
              </p>

              {item.afterDiscount && (
                <div className="flex item-start justify-center gap-[11.68px]">
                  <p className=" font-openSans text-E03C31  h-[28px] text-[24px] font-semibold mt-[5px]">
                    {" "}
                    <span className="font-light">&#8358;</span>{" "}
                    {item.afterDiscount}
                  </p>
                  {item.price && (
                    <p className=" font-openSans text-707070 flex item-center justify-center font-semibold line-through  h-[24px] text-[18px]  mt-[9.5px]">
                      {" "}
                      <span className="font-light">&#8358;</span> {item.price}
                    </p>
                  )}
                </div>
              )}
              {!item.afterDiscount && (
                <p className=" font-openSans text-101820  h-[28px] text-[24px] font-semibold mt-[5px]">
                  {" "}
                  <span className="font-light">&#8358;</span> {item.price}
                </p>
              )}
              <StarRating rating={item.statrs} />
            </div>
          </div>
        ))}
        </div>
        <img
          src={rightArrow}
          className="ml-[68px] h-[52px] w-[52px] flex items-center justify-center  fill-12181F"
          onClick={()=>handileOnclick(1)}
        />
        {/* <div>
                <ArrowRightCircleIcon/>
            </div> */}
      </div>
     </div>

    </div>
    }
    </>
  );
};

export default Discover;
