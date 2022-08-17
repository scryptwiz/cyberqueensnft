import { Link } from "react-router-dom"

const Navbar = () => {
  return (
        <div className="w-full ">
            <nav className="max-w-6xl py-5 mx-auto w-full flex justify-between items-center">
                <Link to='/'>
                    <img src="/assets/logo/logoGroup.png" className="h-7" alt="" />
                </Link>
                <ul className="flex gap-10 items-center text-white text-sm">
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Roadmap</Link></li>
                    <li><Link to="/">Community</Link></li>
                    <li><Link to="/">Connect Wallet</Link></li>
                </ul>
            </nav>
        </div>
  )
}

export default Navbar