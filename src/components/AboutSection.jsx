import { useSelector } from "react-redux"
import { AiOutlineArrowRight } from 'react-icons/ai';

const AboutSection = () => {
  const aboutNft = useSelector(state=>state.aboutNft)
  const aboutContent = useSelector(state=>state.aboutContent)
  return (
    <div className="bg-black each_section py-16">
        <div className="contentmax_width flex justify-between my-auto items-center lg:py-0 py-0 md:py-10">
            <div className="w-1/2 flex flex-wrap">
              {aboutNft.map((items,index)=>{
                return (
                  <div key={index} className="w-1/2 p-2">
                    <div className="rounded bg-fadedBlack/50 p-4">
                      <div className="w-full rounded">
                        <img src={items.fields.nftImage.fields.file.url} className="object-cover w-full h-48" alt={items.fields.nftImage.fields.title} />
                        <div className="flex items-center mt-4">
                          <div className="w-10/12">
                            <h1 className="text-lg text-white title tracking-wide">{items.fields.title}</h1>
                            <p className="text-[0.5rem] mono tracking-wide text-white font-light py-1">Inspired by '{items.fields.by}'</p>
                          </div>
                          <a href={items.fields.link} className="rounded-full w-7 h-7 bg-gray-500 flex items-center justify-center">
                             <AiOutlineArrowRight className="text-white text-sm"/>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="w-1/2 px-10">
              {aboutContent.map((item,index)=>{
                  return (
                    <div key={index} className="flex flex-col gap-5">
                      <h1 className="text-white title text-4xl lg:text-5xl">{item.fields.title}</h1>
                      <p className="text-white tracking-widest text-xs lg:text-sm">{item.fields.subContent}</p>
                      <button className="connect_wallet w-fit text-sm px-7">Connect Button</button>
                    </div>
                  )
              })}
            </div>
        </div>
    </div>
  )
}

export default AboutSection