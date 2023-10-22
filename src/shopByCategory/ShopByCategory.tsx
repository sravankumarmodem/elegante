import ShopNowButton from "@/components/shared/ShopNowButton";
import img1 from "@/assets/Copy of Copy of 10-1.png";
import img2 from "@/assets/Copy of Copy of 7.png";
import img3 from "@/assets/Copy of Copy of La GIrl 2 (1).png";
import img4 from "@/assets/Copy of Copy of loose body weave girl.png";
import img5 from "@/assets/Copy of Copy of 18.png";
import img6 from "@/assets/pexels-amusan-7253834.png";
import rightArrow from "@/assets/arrow-right-circle.png";
import useMediaQuery from "@/hooks/useMediaQury";

interface ShopCategoryList {
  imge: string;
  title: string;
}

const shopCategoryList: Array<ShopCategoryList> = [
  {
    imge: img1,
    title: "Makeup",
  },
  {
    imge: img2,
    title: "Fragrance",
  },
  {
    imge: img3,
    title: "Skin & Personal Care",
  },
  {
    imge: img4,
    title: "Fashion & Apparel",
  },
  {
    imge: img5,
    title: "Tools & Accessories",
  },
  {
    imge: img6,
    title: "Elegante Collection",
  },
];

function ShopByCategory() {
  const largeScreens = useMediaQuery("(min-width: 1024px)");
  return (
    <>
    {/* ===========Large Screens============ */}
    {largeScreens && <div className=" w-[1921px] ">
      <div className="flex flex-col ml-[140px] overflow-hidden">
        <div className="flex items-center justify-between mr-[140px]  mt-[147.8px]">
          <div>
            <p className=" font-openSans text-101820 font-bold h-[41px] leading-[47px] text-[35px]">
              SHOP BY CATEGORY
            </p>
          </div>
          <div className="flex items-center justify-center gap-[8px] ">
            <img
              src={rightArrow}
              alt=""
              className="h-[52px] rotate-180 w-[52px] mt-[2.5px]"
            />
            <img
              src={rightArrow}
              alt=""
              className="h-[52px] w-[52px]  mt-[2.5px]"
            />
            <ShopNowButton buttonText="Shop Now" />
          </div>
        </div>
        {/* <div className="flex item-start  mt-[43.7px]   "> */}
          <div className=" flex item-start  mt-[43.7px]  gap-[39px]">
            {shopCategoryList.map((item: ShopCategoryList, index) => (
              <div key={index} className="flex  flex-col ">
                <div className="h-[321px] w-[306px] rounded-[153px] ">
                  <img
                    src={item.imge}
                    alt="Your Image"
                    // className="h-[321px] w-[306px] "
                  />
                </div>
                {/* <img
                src={item.imge}
                className="rounded-full h-[321px] w-[306px]"
              /> */}
                <p className="mt-[22.25px] text-101820 flex items-center justify-center font-bold">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        {/* </div> */}
      </div>
    </div>}
    {/* =========Small Screens======== */}
    {!largeScreens && <div className=" w-[1024px] ">
      <div className="flex flex-col  overflow-hidden">
        <div className="flex flex-col items-center justify-between  mt-[40px]">
          <div>
            <p className=" font-openSans text-101820 font-bold h-[41px] leading-[47px] text-[35px]">
              SHOP BY CATEGORY
            </p>
          </div>
          <div className="flex items-center justify-center mt-[40px] gap-[8px] ">
            <img
              src={rightArrow}
              alt=""
              className="h-[52px] rotate-180 w-[52px] mt-[2.5px]"
            />
            <img
              src={rightArrow}
              alt=""
              className="h-[52px] w-[52px]  mt-[2.5px]"
            />
            <ShopNowButton buttonText="Shop Now" />
          </div>
        </div>
        {/* <div className="flex item-start  mt-[43.7px]   "> */}
          <div className=" flex flex-col item-center justify-center  mt-[43.7px]">
            {shopCategoryList.map((item: ShopCategoryList, index) => (
              <div key={index} className="flex  flex-col items-center justify-center">
                <div className="h-[321px] w-[306px] rounded-[153px] mt-[40px] flex items-center justify-center ">
                  <img
                    src={item.imge}
                    alt="Your Image"
                    // className="h-[321px] w-[306px] "
                  />
                </div>
                
                <p className="mt-[22.25px] text-101820 flex items-center justify-center font-bold">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        {/* </div> */}
      </div>
    </div>}

    </>
  );
}

export default ShopByCategory;
