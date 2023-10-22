import Nabar from "./components/navbar/Nabar"
import Scroll from "./components/scroll/Scroll"
import Shop from "./components/shop/Shop"
import TrendingNow from "./components/trendingNow/TrendingNow"
import Discover from "./components/discover/Discover"
import HairProducts from "./components/Hair/HairProducts"
import ShopByCategory from "./shopByCategory/ShopByCategory"
import ImageContainer from "./components/shared/ImageContainer"
import { VistList, imgListItems } from "./components/shared/Imglist"
import Fragrance from "./components/fragrance/Fragrance"
import Latest from "./components/latest/Latest"
import { ListItems, ListItems2 } from "./components/discover/itemList"
import Footer from "./components/footer/Footer"


function App() {
  

  return (
    <div className='app  '>
      <Nabar/>
  
       <Scroll/>
      <Shop/>
      <TrendingNow/>
      <Discover title="DISCOVER" imgListItems={ListItems} sublist={true}/>
      <HairProducts/>
      <ShopByCategory/>
      <ImageContainer imgListItems={imgListItems} imgHeight = {694} imgWidth = {500} imgGap={70} />

      <Discover title="OFFERS OF THE WEEK" imgListItems={ListItems2} sublist={false}/>
      <Fragrance/>
      <ImageContainer imgListItems={VistList} imgHeight = {458} imgWidth = {517} imgGap={70} />
      <Latest/>
      <Footer/>
    </div>
  )
}

export default App
