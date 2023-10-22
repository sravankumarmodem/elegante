import img1 from "@/assets/Copy of Copy of 3(1).png"
import img2 from "@/assets/Copy of Copy of 4(1).png"
import img3 from "@/assets/Copy of Copy of 16.png" 
import imgVist1 from "@/assets/IMG_4638.png"
import imgVist2 from "@/assets/IMG_4640.png"
import imgVist3 from "@/assets/IMG_4629.png" 
import imgLatest1 from "@/assets/Copy of Copy of La GIrl 4.png"
import imgLatest2 from "@/assets/Copy of Copy of Billey_s 1.png"
import imgLatest3 from "@/assets/Copy of Copy of 4.png" 


export interface ImgInterFace {
    imge?:string;
    title?:String;
    discription?: string; 
    date?: string;
} 

export const imgListItems :Array<ImgInterFace>=[
    {
        imge : img1,
        title:"Lorem ipsum dolor sit amet, consetetur",
        discription:"Lorem ipsum dolor sit amet, consetetur"

    },
    {
        imge : img2,
        title:"Lorem ipsum dolor sit amet, consetetur",
        discription:"Lorem ipsum dolor sit amet, consetetur"

    },
    {
        imge : img3,
        title:"Lorem ipsum dolor sit amet, consetetur",
        discription:"Lorem ipsum dolor sit amet, consetetur"

    }
]
export const VistList :Array<ImgInterFace>=[
    {
        imge : imgVist1,
        title:"Visit Our Spa",
        discription:"Lorem ipsum dolor sit amet, consetetur"

    },
    {
        imge : imgVist2,
        title:"Visit Our Restaurant",
        discription:"Lorem ipsum dolor sit amet, consetetur"

    },
    {
        imge : imgVist3,
        title:"Visit Our Salon",
        discription:"Lorem ipsum dolor sit amet, consetetur"

    }
]
export const LatestList :Array<ImgInterFace>=[
    {
        imge : imgLatest1,
        title:"Title goes here can go on two lines",
        date:"21.02.2022"

    },
    {
        imge : imgLatest2,
        title:"Title goes here can go on two lines",
        date:"21.02.2022"

    },
    {
        imge : imgLatest3,
        title:"Title goes here can go on two lines",
        date:"21.02.2022"

    }
]
