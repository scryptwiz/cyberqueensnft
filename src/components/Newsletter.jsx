import { useSelector } from "react-redux"

const Newsletter = () => {
    const news = useSelector(state=>state.news)
  return (
    <div className="bg-lightBlack each_section">
        {news.map((item,index)=>{
            return (
                <div className="contentmax_width flex py-0 justify-between my-auto items-center gap-4">
                    <div className="w-1/2 text-white gap-5 flex flex-col">
                        <h1 className="title text-4xl">{item.fields.title}</h1>
                        <p className="text-sm tracking-widest">{item.fields.content}</p>
                        <input type="text" placeholder="Type your email" className="py-3 px-5 rounded bg-transparent border border-gray-300" />
                    </div>
                    <div className="w-1/2">
                        <img src={item.fields.image.fields.file.url} className="w-full" alt={item.fields.image.fields.title} />
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Newsletter