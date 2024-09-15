import BestSeller from "../Components/BestSeller"
import Hero from "../Components/Hero"
import LateCollections from "../Components/LateCollections"
import NewsLetterBox from "../Components/NewsLetterBox"
import OurPolicy from "../Components/OurPolicy"



const Home = () => {
  return (
    <div>
      <Hero/>
      <LateCollections/>
      <BestSeller/>
      <OurPolicy />
      <NewsLetterBox/>
    </div>

  )
}

export default Home
