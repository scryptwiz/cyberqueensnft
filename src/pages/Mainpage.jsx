import { createClient } from "contentful";
import { useEffect } from "react"
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