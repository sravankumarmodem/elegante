import img23 from "@/assets/Copy of Copy of 23.png";
import img10 from "@/assets/Copy of Copy of 10-2.png";
import img20 from "@/assets/Copy of Copy of 20.png";
import useMediaQuery from "@/hooks/useMediaQury";

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
  const largeScreens = useMediaQuery("(min-width: 1024px)");
  return (
    <>
    { largeScreens &&
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

          <div className="flex   mt-[140px]">
            <div className={` gap-[70px] flex  round-[20px] justify-center `}>
              {imgListItems.map((item: ImgInterFace, index) => (
                <div key={index}>
                  <img
                    src={item.imge}
                    alt=""
                    className={"w-[500px] h-[380px]"}
                  />
                  <div className="flex flex-col items-start justify-center">
                    <p className="mt-8 font-openSans text-101820 font-bold h-[41px] text-2xl">
                      {item.title}
                    </p>
                    <p className=" font-openSans text-101820 font-normal h-[28px] text-2xl">
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

    { !largeScreens &&
      <div className="w-[1024px] mt-[140px]">
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

          <div className="flex   mt-[140px]">
            <div className={` flex item-center flex-col round-[20px] justify-center `}>
              {imgListItems.map((item: ImgInterFace, index) => (
                <div key={index} className="mt-[40px]">
                  <img
                    src={item.imge}
                    alt=""
                    className={"w-[500px] h-[380px]"}
                  />
                  <div className="flex flex-col items-start justify-center">
                    <p className="mt-8 font-openSans text-101820 font-bold h-[41px] text-2xl">
                      {item.title}
                    </p>
                    <p className=" font-openSans text-101820 font-normal h-[28px] text-2xl">
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
    </>
  );
};

export default TrendingNow;
