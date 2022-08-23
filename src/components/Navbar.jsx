import { Link } from "react-router-dom"
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { RiCloseFill } from 'react-icons/ri';
import { useState } from "react";

const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    const [classs, setClasss] = useState(false)
    
    const stickyTop = () => {
        if (window.scrollY >= 730) {
            setClasss(true)
        } else {
            setClasss(false)
        }
    }
    window.addEventListener('scroll', stickyTop)
  return (
        <div className={`w-full ${classs?'bg-black fixed px-5 md:px-0 z-40 left-0 top-0':''}`}>
            <nav className="max-w-6xl hidden py-5 mx-auto w-full md:flex justify-between items-center">
                <Link to='/'>
                    <img src="/assets/logo/logoGroup.png" className="h-7" alt="" />
                </Link>
                <ul className="flex gap-10 items-center text-white text-sm">
                    <li><a href="#aboutus">About</a></li>
                    <li><a href="#roadmap">Roadmap</a></li>
                    <li><a href="#community">Community</a></li>
                    <li><Link to="/">Connect Wallet</Link></li>
                </ul>
            </nav>
            <nav className="flex py-7 mx-auto w-full md:hidden justify-between items-center">
                <Link to='/'>
                    <img src="/assets/logo/logoGroup.png" className="h-7" alt="" />
                </Link>
                {!toggle&&(<HiOutlineMenuAlt3 className='text-2xl text-white cursor-pointer' onClick={()=>setToggle(true)}/>)}
            </nav>
            {toggle&&(<div className="w-full h-screen fixed top-0 left-0 bg-black/70 z-40 flex items-center">
                <div className="w-10/12 h-full bg-black/90 p-5 flex flex-col gap-16">
                    <Link to='/'>
                        <img src="/assets/logo/logoGroup.png" className="h-7" alt="" />
                    </Link>
                    <ul className="flex flex-col gap-10 text-white text-sm">
                        <li><a href="#aboutus">About</a></li>
                        <li><a href="#roadmap">Roadmap</a></li>
                        <li><a href="#community">Community</a></li>
                        <li><Link to="/">Connect Wallet</Link></li>
                    </ul>
                </div>
                <div className="w-2/12 h-full pt-5" onClick={()=>setToggle(false)}> 
                    <RiCloseFill className="text-white  text-2xl mx-auto"/>
                </div>
            </div>)}
        </div>
  )
}

export default Navbar