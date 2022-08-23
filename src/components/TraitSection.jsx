import { useSelector } from "react-redux"

const TraitSection = () => {
    const traitContent  = useSelector(state=>state.traitContent)
  return (
    <div className="bg-black trait_section py-10 pr-0">
            {traitContent.map((items,index)=>{
                return (
                    <div key={index} className="contentmax_width flex flex-col md:flex-row justify-between my-auto items-center gap-7 md:gap-0">
                        <div className="w-full md:w-1/2 flex flex-col gap-4 pr-3">
                            <h1 className="text-4xl text-white title tracking-wide lg:text-5xl">{items.fields.title}</h1>
                            <p className="text-xs lg:texxt-sm mono tracking-wide text-white font-light py-1">{items.fields.content}</p>
                        </div>
                        <div className="w-full md:w-1/2 relative">
                            <img src={items.fields.image.fields.file.url} alt={items.fields.image.fields.title} className='lg:h-auto h-fit md:h-80 pickgradient' />
                        </div>
                    </div>
                )
            })}
    </div>
  )
}

export default TraitSection