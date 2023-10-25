import ShopNowButton from "@/components/shared/ShopNowButton";
import img1 from "@/assets/Copy of Copy of 10-1.png";
import img2 from "@/assets/Copy of Copy of 7.png";
import img3 from "@/assets/Copy of Copy of La GIrl 2 (1).png";
import img4 from "@/assets/Copy of Copy of loose body weave girl.png";
import img5 from "@/assets/Copy of Copy of 18.png";
import img6 from "@/assets/pexels-amusan-7253834.png";
import rightArrow from "@/assets/arrow-right-circle.png";
import useMediaQuery from "@/hooks/useMediaQury";
import { useState } from "react";

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
  const tabletScreens = useMediaQuery("(min-width: 769px)");
  const mobileScreens = useMediaQuery("(min-width: 432px)");
  const [count, setCount]=useState<number>(0)
  const [listMap, setListmap]=useState<any>(shopCategoryList.slice(0,5));
  const [countMobile, setCountMobile]=useState<number>(0)
  const [listMapMobile, setListmapMobile]=useState<any>(shopCategoryList.slice(0,1));
  const [countTab, setCountTab]=useState<number>(0)
  const [listMapTab, setListmapTab]=useState<any>(shopCategoryList.slice(0,2));
  
  const handileOnclick=(a:number)=>{
    console.log(count+a, listMap)
    if(count+a<shopCategoryList.length && (count+a)>-1 ){
      
      setCount(count+a)
      setListmap(shopCategoryList.slice(count+a,count+a+4))
    }
    if(count+a === -1){
      
      setCount(0)
      setListmap(shopCategoryList.slice(0,5))
      
    }
    if(count+a=== 1){
    
      setCount(0)
      setListmap(shopCategoryList.slice(1,6))
    }
  }
  const handileOnclickTab=(a:number)=>{
    const c = 2;
    console.log(countTab+a, countTab+a+c, listMapTab, shopCategoryList.length)
    if(countTab+a < shopCategoryList.length && (countTab+a)>-1 ){
      
      setListmapTab(shopCategoryList.slice(countTab+a,countTab+a+c))
      setCountTab(countTab+a)
    }
    if(countTab+a < 0 || countTab+a === shopCategoryList.length-1){
      
      setCountTab(shopCategoryList.length-1+a)
      setListmapTab(shopCategoryList.slice(shopCategoryList.length-1-c,shopCategoryList.length-1))
      
    }
    if(countTab+a > shopCategoryList.length-1 || countTab+a === shopCategoryList.length-1){
    
      setCountTab(0)
      setListmapTab(shopCategoryList.slice(0,c))
    }
  }
  const handileOnclickMobile=(a:number)=>{
    const c = 1;
    console.log(countMobile+a, countMobile+a+c, listMapMobile, shopCategoryList.length)
    if(countMobile+a < shopCategoryList.length && (countMobile+a)>-1 ){
      
      setListmapMobile(shopCategoryList.slice(countMobile+a,countMobile+a+c))
      setCountMobile(countMobile+a)
    }
    if(countMobile+a < 0 || countMobile+a === shopCategoryList.length-1){
      
      setCountMobile(shopCategoryList.length-1+a)
      setListmapMobile(shopCategoryList.slice(shopCategoryList.length-1+a,shopCategoryList.length-1))
      
    }
    if(countMobile+a > shopCategoryList.length-1 || countMobile+a === shopCategoryList.length-1){
    
      setCountMobile(0)
      setListmapMobile(shopCategoryList.slice(0,c))
    }
  }
  return (
    <>
    {/* ===========Large Screens============ */}
    {tabletScreens && mobileScreens && <div className=" w-[1921px] ">
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
              onClick={()=>handileOnclick(-1)}
              />
            <img
              src={rightArrow}
              alt=""
              className="h-[52px] w-[52px]  mt-[2.5px]"
              onClick={()=>handileOnclick(1)}

            />
            <ShopNowButton buttonText="Shop Now" />
          </div>
        </div>
        {/* <div className="flex item-start  mt-[43.7px]   "> */}
          <div className=" flex item-start  mt-[43.7px]  gap-[39px]">
            {listMap.map((item: ShopCategoryList, index:any) => (
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
    {!tabletScreens && mobileScreens &&
     <div className=" w-[768px] ">
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
              onClick={()=>handileOnclickTab(-1)}
            />
            <img
              src={rightArrow}
              alt=""
              className="h-[52px] w-[52px]  mt-[2.5px]"
              onClick={()=>handileOnclickTab(+1)}
            />
            <ShopNowButton buttonText="Shop Now" />
          </div>
        </div>
        {/* <div className="flex item-start  mt-[43.7px]   "> */}
          <div className=" flex  item-center justify-center gap-[20px] mt-[43.7px]">
            {listMapTab.map((item: ShopCategoryList, index:any) => (
              <div key={index} className="flex  flex-col items-center justify-center">
                <div className="h-[321px] w-[300px] rounded-[153px] mt-[40px] flex items-center justify-center ">
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

    {!tabletScreens && !mobileScreens &&
     <div className=  "w-[390px]">
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
              onClick={()=>handileOnclickMobile(-1)}
            />
            <img
              src={rightArrow}
              alt=""
              className="h-[52px] w-[52px]  mt-[2.5px]"
              onClick={()=>handileOnclickMobile(+1)}
            />
            <ShopNowButton buttonText="Shop Now" />
          </div>
        </div>
        {/* <div className="flex item-start  mt-[43.7px]   "> */}
          <div className=" flex  item-center justify-center gap-[20px] mt-[43.7px]">
            {listMapMobile.map((item: ShopCategoryList, index:any) => (
              <div key={index} className="flex  flex-col items-center justify-center">
                <div className="h-[321px] w-[300px] rounded-[153px] mt-[40px] flex items-center justify-center ">
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
