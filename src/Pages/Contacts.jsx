import { assets } from "../assets/assets"
import NewsLetterBox from "../Components/NewsLetterBox"
import Title from "../Components/Title"


const Contacts = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t">
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img src={assets.contact_img} className="w-full md:max-w-[480px]" alt="" />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">5407 Nairobi Junction <br />Nakuru 023, Town, Kenya</p>
          <p className="text-gray-500500">Tel: +254 711 662 784 <br />Email: mwapaul265@gmail.com</p>
          <p className="font-semibold text-xl text-gray-600">Careers at Forever</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contacts
