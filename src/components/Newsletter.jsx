import { useSelector } from "react-redux"

const Newsletter = () => {
    const news = useSelector(state=>state.news)
  return (
    <div id="community" className="bg-lightBlack each_section3 lg:py-0 md:py-10 py-16">
        {news.map((item,index)=>{
            return (
                <div key={index} className="contentmax_width flex flex-col md:flex-row py-0 justify-between my-auto items-center md:gap-4 gap-7">
                    <div className="md:w-1/2 w-full text-white gap-5 flex flex-col md:px-0 px-5">
                        <h1 className="title text-4xl">{item.fields.title}</h1>
                        <p className="text-sm tracking-widest">{item.fields.content}</p>
                        <input type="text" placeholder="Type your email" className="py-3 px-5 rounded bg-transparent border border-gray-300" />
                    </div>
                    <div className="md:w-1/2 w-full">
                        <img src={item.fields.image.fields.file.url} className="w-full hidden md:inline-flex" alt={item.fields.image.fields.title} />
                        <img src={item.fields.mobileImage.fields.file.url} className="w-full inline-flex md:hidden" alt={item.fields.mobileImage.fields.title} />
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Newsletter