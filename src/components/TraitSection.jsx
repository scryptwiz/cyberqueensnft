import { useSelector } from "react-redux"

const TraitSection = () => {
    const traitContent  = useSelector(state=>state.traitContent)
    const traitEval  = useSelector(state=>state.traitEval)
  return (
    <div className="bg-black trait_section py-10 pr-0">
            {traitContent.map((items,index)=>{
                return (
                    <div key={index} className="contentmax_width flex justify-between my-auto items-center">
                        <div className="w-1/2 flex flex-col gap-4">
                            <div className="flex gap-7">
                                {traitEval.map((item,index)=>{
                                    return(
                                        <div key={index} className="flex-col">
                                            <h2 className="title text-white text-xl">{item.fields.values}</h2>
                                            <h2 className="text-white mono tracking-wide lg:text-sm text-[0.6rem]">{item.fields.content}</h2>
                                        </div>
                                    )
                                })}
                            </div>
                            <h1 className="text-4xl text-white title tracking-wide lg:text-5xl">{items.fields.title}</h1>
                            <p className="text-xs lg:texxt-sm mono tracking-wide text-white font-light py-1">{items.fields.content}</p>
                        </div>
                        <div className="w-1/2">
                            <img src={items.fields.image.fields.file.url} alt={items.fields.image.fields.title} className='lg:h-auto w-full h-80 pickgradient' />
                        </div>
                    </div>
                )
            })}
    </div>
  )
}

export default TraitSection