import { useSelector } from "react-redux"

const Roadmap = () => {
    const roadmap = useSelector(state=>state.roadmap)
  return (
    <div id="roadmap" className="bg-black each_section2 py-16">
        {roadmap.map((item,index)=>{
            return (
                <div key={index} className="contentmax_width flex flex-col justify-between my-auto items-center gap-10 lg:gap-4">
                    <h1 className="title text-white text-4xl">{item.fields.title}</h1>
                    <img src={item.fields.image.fields.file.url} alt={item.fields.image.fields.title}  className='w-full hidden md:inline-block'/>
                    <img src={item.fields.mobileImg.fields.file.url} alt={item.fields.mobileImg.fields.title}  className='w-full inline-flex md:hidden'/>
                </div>
            )
        })}
    </div>
  )
}

export default Roadmap