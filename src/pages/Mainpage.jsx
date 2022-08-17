import { createClient } from "contentful";
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import TraitSection from "../components/TraitSection";

 const Mainpage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const getInfo = async () => {
            const client = createClient({
                space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
                accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
              });
              const herosection = await client.getEntries({ content_type: "heroSection" })
              const aboutNFT = await client.getEntries({ content_type: "aboutSection" })
              const aboutContent = await client.getEntries({ content_type: "aboutContent" })
              const traitContent = await client.getEntries({ content_type: "traitContent"})
              const traitEval = await client.getEntries({ content_type: "traitEval"})
              dispatch({type: "SET_HERO_SECTION", payload:herosection.items})
              dispatch({type: "SET_ABOUTNFT_SECTION", payload:aboutNFT.items})
              dispatch({type: "SET_ABOUTCONTENT_SECTION", payload:aboutContent.items})
              dispatch({type: "SET_TRAITCONTENT_SECTION", payload:traitContent.items})
              dispatch({type: "SET_TRAITEVAL_SECTION", payload:traitEval.items})
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
        <TraitSection/>
    </div>
  )
}

export default Mainpage