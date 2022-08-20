import { useSelector } from "react-redux"

const Roadmap = () => {
    const roadmap = useSelector(state=>state.roadmap)
  return (
    <div className="bg-black each_section py-16">
        {roadmap.map((item,index)=>{
            return (
                <div key={index} className="contentmax_width flex flex-col justify-between my-auto items-center gap-4">
                    <h1 className="title text-white text-4xl">{item.fields.title}</h1>
                    <img src={item.fields.image.fields.file.url} alt={item.fields.image.fields.title}  className='w-full'/>
                </div>
            )
        })}
    </div>
  )
}

export default Roadmap