import { createClient } from "contentful";
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

 const Mainpage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const getInfo = async () => {
            const client = createClient({
                space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
                accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
              });
              const herosection = await client.getEntries({ content_type: "heroSection" })
              dispatch({type: "SET_HERO_SECTION", payload:herosection.items})
        }
        getInfo()
    }, [dispatch])
    
  return (
    <div>
        <div className="bg-black hero_bg each_section flex-col">
            <Navbar/>
            <HeroSection/>
        </div>
        <AboutSection/>
    </div>
  )
}

export default Mainpage