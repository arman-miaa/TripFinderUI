import { Link } from "react-router";
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
      <div>
          <div className="flex items-center justify-between">
              <Link to='/'>
                  <img src={logo} className="w-[140px] h-[60px] cursor-pointer" alt="logo" />
              </Link>

              <div className="flex items-center justify-center gap-2">
                  <div>
                      <Link>TRAVEL AGENCY</Link>
                  </div>
                  <div>
                      <button>Login/Register</button>
                  </div>
              </div>
              
          </div>
    </div>
  )
}

export default Navbar