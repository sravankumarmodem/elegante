import img4 from "@/assets/Copy of Copy of 4(1).png"
import img3 from "@/assets/Copy of Copy of 3(1).png"
import img10 from "@/assets/Copy of Copy of Hairfinity 1.png"
import img20 from "@/assets/Copy of Copy of 92.5 by 42 2 copy 2 copy 4 copy 6.png"
import imgList1 from "@/assets/Copy of Copy of Toppik 2.png"
import imgList2 from "@/assets/Copy of Copy of Skin Success 3.png"
import imgList3 from "@/assets/Copy of Copy of Coconut Oil Formula.png"
import imgList4 from "@/assets/Copy of Copy of 19.png"

export interface ImgList {
    productType:string;
    imge:string;
    title:String;
    price?: number;
    afterDiscount?:number;
    statrs:number;

} 

 

export const ListItems :Array<ImgList>=[
    {
        productType:"HAIR CARE",
        imge : img4,
        title:"Maui Shampoo",
        price:29.99,
        statrs:4.5,

    }, {
        productType:"SKIN & PERSONAL CARE",
        imge : img10,
        title:"Hair Care Set",
        price:34.99,
        statrs:3,

    },
    {
        productType:"SKIN & PERSONAL CARE",
        imge : img20,
        title:"YSL Nail Varnishes",
        price:89.99,
        statrs:4,

    },
    {
        productType:"MAKEUP",
        imge : img3,
        title:"Nude Makeup Set",
        price:30.00,
        afterDiscount:23.99,
        statrs:5,

    },
]
export const ListItems2 :Array<ImgList>=[
    {
        productType:"HAIR CARE",
        imge : imgList1,
        title:"Maui Shampoo",
        price:29.99,
        statrs:4.5,

    }, {
        productType:"SKIN & PERSONAL CARE",
        imge : imgList2,
        title:"Hair Care Set",
        price:34.99,
        statrs:3,

    },
    {
        productType:"SKIN & PERSONAL CARE",
        imge : imgList3,
        title:"YSL Nail Varnishes",
        price:89.99,
        statrs:4,

    },
    {
        productType:"MAKEUP",
        imge : imgList4,
        title:"Nude Makeup Set",
        afterDiscount:23.99,
        statrs:5,

    },
]