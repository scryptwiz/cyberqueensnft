import { createClient } from "contentful";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import AboutSection from "../components/AboutSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import News from "../components/News";
import Newsletter from "../components/Newsletter";
import Roadmap from "../components/Roadmap";
import Team from "../components/Team";
import Traits from "../components/Traits";
import TraitSection from "../components/TraitSection";

 const Mainpage = () => {
    const [loader, setLoader] = useState(true)
    const dispatch = useDispatch()
    useEffect(() => {
        setLoader(true)
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
              const traits = await client.getEntries({ content_type: "trait"})
              const roadmap = await client.getEntries({ content_type: "roadmapSection"})
              const team = await client.getEntries({ content_type: "teamSection"})
              const news = await client.getEntries({ content_type: "newsletter"})
              const socialMedia = await client.getEntries({ content_type: "socialMedia"})
              const newsField = await client.getEntries({ content_type: "news"})
              dispatch({type: "SET_HERO_SECTION", payload:herosection.items})
              dispatch({type: "SET_ABOUTNFT_SECTION", payload:aboutNFT.items})
              dispatch({type: "SET_ABOUTCONTENT_SECTION", payload:aboutContent.items})
              dispatch({type: "SET_TRAITCONTENT_SECTION", payload:traitContent.items})
              dispatch({type: "SET_TRAITEVAL_SECTION", payload:traitEval.items})
              dispatch({type: "SET_TRAITS", payload:traits.items})
              dispatch({type: "SET_ROADMAP", payload:roadmap.items})
              dispatch({type: "SET_TEAM", payload:team.items})
              dispatch({type: "SET_NEWS", payload:news.items})
              dispatch({type: "SET_SOCIALS", payload:socialMedia.items})
              dispatch({type: "SET_NEWSFIELD", payload:newsField.items})
              setLoader(false)
        }
        getInfo()
    }, [dispatch])
    
  return (
    <div>
      {loader&&(
          <div className='w-full h-screen fixed top-0 left-0 bg-black flex items-center justify-center z-[100] flex-col'>
            <img src="/assets/logo/icon.png" alt="Cyber Icon" className="animate-bounce w-10"  />
            <img src="/assets/logo/Text.png" alt="Cyber Queen" className="animate-pulse h-10 mt-3" />
          </div>
        )}
        <div className="bg-black hero_bg each_section flex-col">
            <Navbar/>
            <HeroSection/>
        </div>
        <AboutSection/>
        <TraitSection/>
        <Traits/>
        <Roadmap/>
        <Team/>
        <News/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Mainpage