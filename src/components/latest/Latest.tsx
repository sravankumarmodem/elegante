import { ImgInterFace, LatestList } from "../shared/Imglist";
import rightArrow from "@/assets/arrow-right-circle.png";
import ShopNowButton from "../shared/ShopNowButton";
import useMediaQuery from "@/hooks/useMediaQury";

const Latest = () => {
  const largeScreens = useMediaQuery("(min-width: 1024px)");
  return (
    <>
      {largeScreens && (
        <div className="mt-[140px]  w-[1921px]">
          <div className="flex items-center justify-center gap-[97px]">
            <div className="w-[325px] flex flex-col item-start justify-center">
              <p className="tracking-[3.5px] text-[35px] font-bold">LATEST</p>
              <p className="mt-[19.25px] text-justify text-[18px] font-normal">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut.
              </p>
              <div className=" flex items-center justify-center mt-[34.37px] gap-[8px]">
                <img
                  src={rightArrow}
                  alt=""
                  className="h-[52px] w-[52px] rotate-180 "
                />
                <img src={rightArrow} alt="" className="h-[52px] w-[52px]  " />
                <ShopNowButton buttonText="VIEW ALL" />
              </div>
            </div>

            <div className="flex items-center justify-center gap-[40px]">
              {LatestList.map((item: ImgInterFace, index) => (
                <div key={index} className="flex flex-col justify-center items-start ">
                  <img
                    src={item.imge}
                    className="w-[382px] h-[379px] rounded-[20px]"
                  />
                  <p className="mt-[20px] text-1018204D font-bold text-[18px] ">
                    {item.date}
                  </p>
                  <p className="text-101820 font-bold mt-[20px] line-clamp-2 text-[24px] w-[280px]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ==========small====== */}

      {!largeScreens && (
        <div className="mt-[40px]  w-[1024px]">
          <div className="flex flex-col items-center justify-center gap-[97px]">
            <div className="w-[325px] flex flex-col item-start justify-center">
              <p className="tracking-[3.5px] text-[35px] font-bold">LATEST</p>
              <p className="mt-[19.25px] text-justify text-[18px] font-normal">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut.
              </p>
              <div className=" flex items-center justify-center mt-[34.37px] gap-[8px]">
                <img
                  src={rightArrow}
                  alt=""
                  className="h-[52px] w-[52px] rotate-180 "
                />
                <img src={rightArrow} alt="" className="h-[52px] w-[52px]  " />
                <ShopNowButton buttonText="VIEW ALL" />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-[40px]">
              {LatestList.map((item: ImgInterFace, index) => (
                <div key={index} className="flex flex-col justify-center items-start ">
                  <img
                    src={item.imge}
                    className="w-[382px] h-[379px] rounded-[20px]"
                  />
                  <p className="mt-[20px] text-1018204D font-bold text-[18px] ">
                    {item.date}
                  </p>
                  <p className="text-101820 font-bold mt-[20px] line-clamp-2 text-[24px] w-[280px]">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Latest;
