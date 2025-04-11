import { Link } from "react-router";
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
      <div className="container mx-auto py-2 ">
          <div className="flex items-center justify-between mx-20">
              <Link to='/'>
                  <img src={logo} className="w-[140px] h-[60px] cursor-pointer" alt="logo" />
              </Link>

              <div className="flex items-center justify-center gap-2">
                  <div className="bg-primary text-white py-1 px-2 rounded-full">
                      <Link>TRAVEL AGENCY</Link>
                  </div>
                  <div>
                      <button className="bg-black text-white py-1 px-2 rounded-full cursor-pointer">Login/Register</button>
                  </div>
              </div>
              
          </div>
    </div>
  )
}

export default Navbar