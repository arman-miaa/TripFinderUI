import { useState } from "react";
import { Link } from "react-router";
import logo from "../assets/logo.webp";
import Authentication from "../pages/Authentication";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [authType, setAuthType] = useState("login"); // login or register

  return (
    <div className="container mx-auto py-2">
      <div className="flex items-center justify-between mx-20">
        <Link to="/">
          <img
            src={logo}
            className="w-[140px] h-[60px] cursor-pointer"
            alt="logo"
          />
        </Link>

        <div className="flex items-center justify-center gap-2">
          <div className="bg-primary text-white py-1 px-2 rounded-full">
            <Link>TRAVEL AGENCY</Link>
          </div>
          <div>
            <button
              onClick={() => {
                setIsModalOpen(true);
                setAuthType("login");
              }}
              className="bg-black text-white py-1 px-2 rounded-full cursor-pointer"
            >
              Login/Register
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-white/10 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-[400px] relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-black font-bold text-xl"
            >
              ✕
            </button>
            <Authentication
              authType={authType}
              setAuthType={setAuthType}
              closeModal={() => setIsModalOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
