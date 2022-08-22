import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const Footer = () => {
    const socialMedia = useSelector(state=>state.socialMedia)
  return (
    <div className="bg-black each_section py-16">
        <div className="contentmax_width flex flex-col justify-between my-auto items-center gap-4">
            <div className="flex justify-between w-full text-white">
                <h3 className="title text-4xl">Join the community</h3>
                <ul className="flex gap-4">
                    <li><Link to='/'>About</Link></li>
                    <li><Link to='/'>Roadmap</Link></li>
                    <li><Link to='/'>Community</Link></li>
                    <li><Link to='/'>Connect Wallet</Link></li>
                </ul>
            </div>
            <div className="flex justify-between w-full items-center">
                <div className="w-1/2 flex gap-4">
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