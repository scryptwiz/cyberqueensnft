import { useSelector } from "react-redux"

const Traits = () => {
    const traits = useSelector(state=>state.traits)
    console.log(traits)
  return (
    <div className="bg-black each_section py-10">
        <div className="contentmax_width flex justify-between my-auto items-center bg-white/10 rounded-lg p-10">
            <div className="flex flex-col gap-3 w-full">
                <div className="flex justify-between items-center text-white">
                    <div className="w-5/12">
                        <h1 className="title text-4xl">Traits</h1>
                    </div>

                    <div className="w-7/12">
                        <p className="text-xs text-widest p-4">Building a thriving community that gives back through supporting girls and empowering women to make a positive impact in the society.</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-5/12">
                        <img src="/assets/images/traitImg.png" className="w-3/5" alt="Traitimg" />
                    </div>
                    <div className="w-7/12 flex flex-wrap">
                        {traits.map((item,index)=>{
                            return(
                                <div className="w-1/2 p-2">
                                    <div className="w-full py-3 px-4 bg-white/10 flex rounded-lg gap-3">
                                        <div className="rounded-full w-10 h-10 bg-gray-500">{item.fields.image&&(<img src={item.fields.image.fields.file.url} alt={item.fields.image.fields.title} className='w-full object-cover'/>)}</div>
                                        <div className="flex flex-col">
                                            <h4 className="title text-gray-400 text-sm">{item.fields.value}</h4>
                                            <h4 className="title text-white text-xl">{item.fields.trait}</h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Traits