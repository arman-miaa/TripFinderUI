import Banner from "../components/Banner"
import HotDeals from "../components/HotDeals"
import ImageSlider from "../components/ImageSlider"


const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner />
      <ImageSlider />
      <HotDeals/>
    </div>
  )
}

export default Home