import useMediaQuery from "@/hooks/useMediaQury";
import { ImgInterFace } from "./Imglist";
import ShopNowButton from "./ShopNowButton";

type Props = {
  imgHeight: number;
  imgWidth: number;
  imgGap: number;
  imgListItems: Array<ImgInterFace>;
};

const ImageContainer = ({
  imgHeight,
  imgWidth,
  imgGap,
  imgListItems,
}: Props) => {
  
  const tabletScreens = useMediaQuery("(min-width: 769px)");
  const mobileScreens = useMediaQuery("(min-width: 432px)"); 

  console.log(imgHeight,
    imgWidth,
    imgGap,
    imgListItems)
  return (
    <>
      {  tabletScreens && mobileScreens &&
        <div className=" w-[1921px]">
          <div className="flex item-center justify-center  mt-[140px]">
            <div className={` gap-[70px] flex  round-[20px] justify-center `}>
              {imgListItems.map((item: ImgInterFace, index) => (
                <div key={index}>
                  <img
                    src={item.imge}
                    alt=""
                    className={
                      imgHeight === 694
                        ? `h-[694px] w-[500px]`
                        : `h-[458px] w-[517px]`
                    }
                  />
                  <div className="flex flex-col items-start justify-center">
                    <p className="mt-8 font-openSans text-101820 font-bold h-[41px] text-2xl">
                      {item.title}
                    </p>
                    <p className=" font-openSans text-101820 font-normal h-[28px] text-2xl">
                      {item.discription}
                    </p>
                    <div className="mt-[30px]">
                      <ShopNowButton buttonText="Shop Now" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }

      {/* ============Tab=========== */}
      { ! tabletScreens && mobileScreens &&
        <div className=" w-[768px]">
          <div className="flex   item-center justify-center  mt-[140px]">
            <div className={`  flex flex-col round-[20px] justify-center `}>
              {imgListItems.map((item: ImgInterFace, index) => (
                <div key={index} className="mt-[80px] ">
                  <img
                    src={item.imge}
                    alt=""
                    className={ `h-[458px] w-[517px]`}
                  />
                  <div className="flex  flex-col items-center justify-center">
                    <p className="mt-8 font-openSans text-101820 font-bold h-[41px] text-2xl">
                      {item.title}
                    </p>
                    <p className=" font-openSans text-101820 font-normal h-[28px] text-2xl">
                      {item.discription}
                    </p>
                    <div className="mt-[30px] mb-[30px]">
                      <ShopNowButton buttonText="Shop Now" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
      {/* ============smal=========== */}
      { ! tabletScreens && !mobileScreens &&
        <div className=" w-[390px] flex flex-col items-center justify-center">
          <div className="flex mx-[40px]  item-center justify-center  mt-[40px]">
            <div className={`  flex flex-col round-[20px] items-center justify-center `}>
              {imgListItems.map((item: ImgInterFace, index) => (
                <div key={index} className="mt-[40px] ">
                  <img
                    src={item.imge}
                    alt=""
                    className={ `h-[358px] w-[317px]`}
                  />
                  <div className="flex  flex-col items-start mx-[20px] justify-center">
                    <p className="mt-8 font-openSans text-101820 font-bold h-[41px] text-[24px]">
                      {item.title}
                    </p>
                    <p className=" font-openSans mt-[40px] text-101820 font-normal h-[28px] text-[18px]">
                      {item.discription}
                    </p>
                    <div className="mt-[30px] mb-[30px]">
                      <ShopNowButton buttonText="Shop Now" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default ImageContainer;
