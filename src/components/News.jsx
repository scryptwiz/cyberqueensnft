import { useSelector } from "react-redux";
import Slider from "react-slick";
const News = () => {
    const news = useSelector(state=>state.newsField)
    const settings = {
        dots: false,
        arrows:false,
        infinite: true,
        speed: 5000,
        slidesToShow: 3,
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
    <div className="bg-black each_section2 py-10 md:py-16">
        <div className="contentmax_width flex flex-col justify-between my-auto items-center gap-10 md:gap-4">
            <h1 className="text-white title text-4xl w-full">News and Updates</h1>
            <Slider {...settings}className="w-full lg:max-w-6xl mx-auto text-white">
                {news.map((items,index)=>{
                    return(
                        <div key={index} className="w-1/3 p-5">
                            <div className="bg-white/20 p-7 w-60 sm:w-72">
                                <div className="w-full h-32 bg-gray-500"></div>
                                <h1 className="text-2xl text-white title mt-5">{items.fields.title}</h1>
                                <p className="text-gray-400 text-xs">{items.fields.date}</p>
                                <p className="text-sm mt-4">{items.fields.content.substring(0, 100) + '...'}</p>
                                <a href={items.fields.link} target="_blank" rel="noreferrer" className="underline text-white text-sm mt-5">Read More</a>
                            </div>
                        </div>
                    )
                })}
                
            </Slider>
        </div>
    </div>
  )
}

export default News