import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


const MainLayout = () => {
  return (
    <div>
      <div className='sticky top-0 left-0 bg-gray-100 z-50'>
        <Navbar />
      </div>
      <div className="min-h-[calc(100vh-340px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout