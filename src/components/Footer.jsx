import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Footer = () => {
    const socialMedia = useSelector(state=>state.socialMedia)
  return (
    <div className="bg-black each_section2 py-16">
        <div className="contentmax_width flex flex-col justify-between my-auto items-center gap-4">
            <div className="flex flex-col md:flex-row justify-between w-full text-white md:gap-0 gap-5">
                <h3 className="title text-4xl">Join the community</h3>
                <div className="md:hidden flex md:w-1/2 gap-4">
                    {socialMedia.map((item,index)=>{
                        return (
                            <img key={index} src={item.fields.image.fields.file.url} className='w-5 h-5' alt={item.fields.image.fields.title} />
                        )
                    })}
                </div>
                <ul className="flex gap-4 flex-col md:flex-row">
                    <li><a href="#aboutus">About</a></li>
                    <li><a href="#roadmap">Roadmap</a></li>
                    <li><a href="#community">Community</a></li>
                    <li><Link to='/'>Connect Wallet</Link></li>
                </ul>
            </div>
            <div className="block md:flex flex-col md:flex-row justify-between w-full items-center">
                <div className="hidden md:flex md:w-1/2 gap-4">
                    {socialMedia.map((item,index)=>{
                        return (
                            <img key={index} src={item.fields.image.fields.file.url} className='w-5 h-5' alt={item.fields.image.fields.title} />
                        )
                    })}
                </div>
                <img src="/assets/logo/logoGroup.png" className="h-10"  alt="Cyber Queens Logo" />
            </div>
        </div>
    </div>
  )
}

export default Footer