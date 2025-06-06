import { useSelector } from "react-redux"

const HeroSection = () => {
    const heroContent = useSelector(state=>state.herosection)
  return (
    <div className="contentmax_width my-auto flex items-center lg:py-0 py-0 md:py-10">
        {heroContent.map((items,index)=>{
            return (
                <div key={index} className="contentmax_width md:flex items-center justify-between">
                    <div className="flex flex-col items-start gap-4 md:gap-7 w-full md:w-1/2">
                        <h1 className="text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-white title">{items.fields.title}</h1>
                        <h1 className="text-sm text-white font-light tracking-wider md:w-2/3 w-full">{items.fields.content}</h1>
                        <button className="connect_wallet">Connect Wallet</button>
                    </div>
                    <div className="md:w-1/2 w-full lg:block">
                        <img src={items.fields.image.fields.file.url} className='w-full object-cover' alt={items.fields.image.fields.title} />
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default HeroSection