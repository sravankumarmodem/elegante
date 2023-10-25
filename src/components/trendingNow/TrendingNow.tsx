import img23 from "@/assets/Copy of Copy of 23.png";
import img10 from "@/assets/Copy of Copy of 10-2.png";
import img20 from "@/assets/Copy of Copy of 20.png";
import rightArrow from "@/assets/arrow-right-circle.png";
import useMediaQuery from "@/hooks/useMediaQury";
import { useState } from "react";

export interface ImgInterFace {
  imge: string;
  title: String;
  discription: string;
}

const imgListItems: Array<ImgInterFace> = [
  {
    imge: img23,
    title: "Trend setting makeup",
    discription: "Lorem ipsum dolor sit amet, consetetur",
  },
  {
    imge: img10,
    title: "New makeup brushes",
    discription: "Lorem ipsum dolor sit amet, consetetur",
  },
  {
    imge: img20,
    title: "This seasons hottest nail polish",
    discription: "Lorem ipsum dolor sit amet, consetetur",
  },
];

const TrendingNow = () => {
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
      <div className="w-[1921px] mt-[140px]">
      <div className=" flex flex-col items-center justify-center ">
        <div className="h-[50px]   tracking-[3.5px]  bg-white flex items-center justify-center font-openSans font-bold text-unnamed-color-101820 text-[35px]">
          TRENDING NOW
        </div>
        {/* <div className="flex   round-md justify-between mt-[37px]">
            {imgListItems.map((item: ImgInterFace, index) => (
              <div>
                <img src={item.imge} alt="" className="w-[500px] h-[380px]" />
                <div className="flex flex-col items-center justify-center">
                  <p className="mt-8 font-openSans text-unnamed-color-101820 font-bold h-[41px] text-2xl">
                    {item.title}
                  </p>
                  <p className=" font-openSans text-unnamed-color-101820 font-normal h-[28px] text-2xl">
                    {item.discription}
                  </p>
                </div>
              </div>
            ))}
          </div> */}

          <div className="flex   mt-[37px]">
            <div className={` gap-[70px] flex  round-[20px] justify-center `}>
              {imgListItems.map((item: ImgInterFace, index) => (
                <div key={index}>
                  <img
                    src={item.imge}
                    alt=""
                    className={"w-[500px] h-[380px]"}
                  />
                  <div className="flex flex-col items-start justify-center">
                    <p className="mt-8 font-openSans text-101820 font-bold h-[41px] text-[24px]">
                      {item.title}
                    </p>
                    <p className=" font-openSans text-101820 font-normal h-[28px] text-[18px]">
                      {item.discription}
                    </p>
                    {/* <ShopNowButton buttonText="Shop Now" /> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> 
    </div>
    }

    { !tabletScreens &&
      <div className={mobileScreens ? "w-[768px] mt-[60px] h-auto" :"w-[390px] mt-[60px] h-auto" }>
      <div className=" flex flex-col items-center justify-center ">
        <div className="  tracking-[3.5px]  bg-white flex items-center justify-center font-openSans font-bold text-unnamed-color-101820 text-[32px]">
          TRENDING NOW
        </div>
        

          <div className="flex items-center justify-center  mt-[20px]">
            <div className={` flex item-center  round-[20px] justify-center `}>
            <div className="flex items-center ">
            <img
          src={rightArrow}
          className="h-[52px] w-[52px] mr-[40px] flex items-center rotate-180 justify-center fill-12181F   "
          onClick={()=>handileOnclick(-1)}
        />
              {listMap.map((item: ImgInterFace, index:any) => (
                <div key={index} className="mt-[20px] h-auto">
                  <img
                    src={item.imge}
                    alt=""
                    className={mobileScreens ? "w-[500px] h-[380px]": "w-[290px] h-[220px]  "}
                  />
                  <div className="flex flex-col items-start justify-center">
                    <p className="mt-[27px] font-openSans text-101820 font-bold h-[41px] text-[24]">
                      {item.title}
                    </p>
                    <p className="mt-[1px] font-openSans text-101820 font-normal h-[28px] text-[18]">
                      {item.discription}
                    </p> 
                  </div>
                </div>
              ))}
            <img
          src={rightArrow}
          className="h-[52px] w-[52px] ml-[20px] flex items-center  justify-center fill-12181F   "
          onClick={()=>handileOnclick(1)}
        />
            </div>
            </div>
          </div>
        </div> 
    </div>
    }
    </>
  );
};

export default TrendingNow;
