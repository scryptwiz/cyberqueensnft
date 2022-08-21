import { useSelector } from "react-redux"

const Team = () => {
    const team = useSelector(state=>state.team)
  return (
    <div className="bg-black each_section py-16">
        <div className="contentmax_width my-auto flex items-center flex-col lg:py-0 py-0 md:py-10">
            <h1 className="text-4xl text-white title mx-auto">Team</h1>
            <div className="flex flex-wrap w-full mt-10">
                {team.map((item,index)=>{
                    return(
                        <div key={index} className="flex flex-col w-1/4 p-2 text-white items-center">
                            <div className="rounded-full w-20 h-20 bg-gray-500">
                                {item.fields.image&&(<img className="w-full h-fit rounded-full object-cover" src={item.fields.image.fields.file.url} alt={item.fields.fields.title}/>)}
                            </div>
                            <h4 className="tracking-wider title text-xl mt-2">{item.fields.name}</h4>
                            <p className="tracking-wider text-center w-9/12 text-sm">{item.fields.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default Team