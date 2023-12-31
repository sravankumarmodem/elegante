import img1 from "@/assets/Copy of Copy of Cocobutter 4.png"
import img2 from "@/assets/Copy of Copy of Hairfinity 3.png"
import ShopNowButton from "../shared/ShopNowButton";
import useMediaQuery from "@/hooks/useMediaQury";

interface ImgList { 
    imge:string;
    title:string;
    discription : string;
} 

 

const imgListItems :Array<ImgList>=[
    {
        
        imge : img1,
        title:"Lorem ipsum dolor sit amet, consetetur",
        discription :"Lorem ipsum dolor sit amet, consetetur"

    }, 
    {
        imge : img2,
        title:"Lorem ipsum dolor sit amet, consetetur", 
        discription :"Lorem ipsum dolor sit amet, consetetur",
    },
 
] 
const HairProducts = () => {
    const tabletScreens = useMediaQuery("(min-width: 769px)");
  const mobileScreens = useMediaQuery("(min-width: 432px)");
  return (
    <>
    { tabletScreens && mobileScreens &&
        <div className=" mx-[140px] w-[1921px] ">
        <div className="flex  mt-[480px] round-md gap-[72px]   ">
    {
        imgListItems.map((item:ImgList, index)=>(

            <div key={index} className="flex flex-col item-center ">
                <img src={item.imge} alt=""  className="w-[784px] h-[380px] "/>
                <div className="flex flex-col items-start justify-center">
                    <p className=" font-openSans text-101820 font-bold h-[41px] mt-[27px] text-2xl">{item.title}</p>
                    <p className=" mt-[11px] mb-[27px] font-openSans text-101820 font-normal h-[28px] text-2xl">{item.discription}</p>
                    <ShopNowButton buttonText="Shop Now"/>
                </div>
            </div>
          
        ))
    }

</div>
    </div>
    }

    {/* ============small ============ */}
    {! tabletScreens && 
        <div className={mobileScreens ? "  w-[768px] ":"w-[390px"}>
        <div className="flex flex-col items-center justify-center mt-[280px] round-md    ">
    {
        imgListItems.map((item:ImgList, index)=>(

            <div key={index} className="flex flex-col item-center mb-[40px] ">
                <img src={item.imge} alt=""  className={mobileScreens ? "w-[684px] h-[380px] ": "w-[294px] h-[280px] "}/>
                <div className="flex flex-col items-center justify-center">
                    <p className=" font-openSans text-101820 font-bold h-[41px] mt-[27px] text-[24px]">{item.title}</p>
                    <div className={mobileScreens ? "mt-[21px] " : "mt-[41px]"}>

                    <p className=" mb-[40px] font-openSans text-101820 font-normal h-[28px] text-[18px]">{item.discription}</p>
                    </div>
                    <ShopNowButton buttonText="Shop Now"/>
                </div>
            </div>
          
        ))
    }

</div>
    </div>
    }
    </>
    
  )
}

export default HairProducts