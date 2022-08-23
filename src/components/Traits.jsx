import { useSelector } from "react-redux"

const Traits = () => {
    const traits = useSelector(state=>state.traits)
  return (
    <div className="bg-black each_section2 py-10">
        <div className="contentmax_width flex justify-between my-auto items-center bg-white/10 rounded-lg sm:p-10 p-5">
            <div className="flex flex-col gap-3 w-full">
                <div className="flex flex-col lg:flex-row justify-between items-center text-white gap-3">
                    <div className="w-full lg:w-5/12">
                        <h1 className="title text-4xl">Traits</h1>
                    </div>

                    <div className="w-full lg:w-7/12">
                        <p className="text-xs text-widest lg:p-4">Cyber Queens are made up of over 300 hand drawn traits which gives every Queen her own unique charm.</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="w-5/12 hidden lg:inline-block ">
                        <img src="/assets/images/traitImg.png" className="w-3/5" alt="Traitimg" />
                    </div>
                    <div className="w-full lg:w-7/12 flex flex-wrap">
                        {traits.map((item,index)=>{
                            return(
                                <div key={index} className="w-1/2 p-1 sm:p-2">
                                    <div className="w-full py-2 px-2 sm:py-3 sm:px-4 bg-white/10 flex rounded-lg gap-2 sm:gap-3">
                                        <div className="rounded-full w-7 h-7 sm:w-10 sm:h-10 bg-gray-500">{item.fields.image&&(<img src={item.fields.image.fields.file.url} alt={item.fields.image.fields.title} className='w-full object-cover'/>)}</div>
                                        <div className="flex flex-col">
                                            <h4 className="title text-gray-400 sm:text-sm text-xs">{item.fields.value}</h4>
                                            <h4 className="title text-white sm:text-xl text-sm break-all">{item.fields.trait}</h4>
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