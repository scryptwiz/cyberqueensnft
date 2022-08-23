import { useSelector } from "react-redux"
import { AiOutlineArrowRight } from 'react-icons/ai';
import Slider from "react-slick";

const AboutSection = () => {
  const aboutNft = useSelector(state=>state.aboutNft)
  const aboutContent = useSelector(state=>state.aboutContent)
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    speed: 700,
    autoplay: true,
    fade: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: false,
          autoplay: false,
          speed: 5000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          autoplay: false,
          infinite: false,
          slidesToShow: 1,
          speed: 5000,
        }
      }
    ]
  };
  const settings2 = {
    dots: false,
    arrows:false,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
  };
  return (
    <div id="aboutus" className="bg-black each_section2 py-10 md:py-16">
        <div className="contentmax_width flex flex-col-reverse md:flex-row justify-between my-auto items-center md:gap-0 gap-7">
            <div className="md:w-1/2 w-full flex flex-wrap md:hidden">
              <Slider {...settings2}className="w-full lg:max-w-6xl mx-auto text-white">
                {aboutNft.map((items,index)=>{
                  return (
                    <div key={index} className="w-full sm:w-1/2 p-2">
                      <div className="rounded bg-fadedBlack/50 p-4">
                        <div className="w-full rounded">
                        <Slider className="w-full mx-auto" {...settings}>
                            {items.fields.nftImages.map((item,index)=>{
                                return (
                                    <div key={index} className="bg-green-500">
                                        <img src={item.fields.file.url} alt={item.fields.title} className='w-full'/>
                                    </div>
                                )
                            })}
                          </Slider>
                          <div className="flex items-center mt-4">
                            <div className="w-10/12">
                              <h1 className="text-lg text-white title tracking-wide">{items.fields.title}</h1>
                              <p className="text-[0.5rem] mono tracking-wide text-white font-light py-1">Inspired by '{items.fields.by}'</p>
                            </div>
                            <a href={items.fields.link} rel="noreferrer" target='_blank'  className="rounded-full w-7 h-7 bg-gray-500 flex items-center justify-center">
                              <AiOutlineArrowRight className="text-white text-sm"/>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </Slider>
            </div>
            <div className="md:w-1/2 w-full flex-wrap md:flex hidden">
                {aboutNft.map((items,index)=>{
                  return (
                    <div key={index} className="w-full sm:w-1/2 p-2">
                      <div className="rounded bg-fadedBlack/50 p-4">
                        <div className="w-full rounded">
                        <Slider className="w-full mx-auto" {...settings}>
                            {items.fields.nftImages.map((item,index)=>{
                                return (
                                    <div key={index} className="bg-green-500">
                                        <img src={item.fields.file.url} alt={item.fields.title} className='w-full'/>
                                    </div>
                                )
                            })}
                          </Slider>
                          <div className="flex items-center mt-4">
                            <div className="w-10/12">
                              <h1 className="text-lg text-white title tracking-wide">{items.fields.title}</h1>
                              <p className="text-[0.5rem] mono tracking-wide text-white font-light py-1">Inspired by '{items.fields.by}'</p>
                            </div>
                            <a href={items.fields.link} rel="noreferrer" target='_blank'  className="rounded-full w-7 h-7 bg-gray-500 flex items-center justify-center">
                              <AiOutlineArrowRight className="text-white text-sm"/>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
            </div>
            <div className="md:w-1/2 w-full md:px-10">
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