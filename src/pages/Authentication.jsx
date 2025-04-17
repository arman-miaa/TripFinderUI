import { useState, useRef, useEffect } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

const Authentication = () => {
  const [authType, setAuthType] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const modalRef = useRef(null);

  const handleToggle = () => {
    setAuthType(authType === "login" ? "register" : "login");
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div
        ref={modalRef}
        className="bg-white p-8 rounded-lg w-full max-w-md shadow-lg relative"
      >
        <h2 className="text-center text-2xl font-bold text-green-500 mb-6">
          {authType === "login" ? "Sign In" : "Sign Up"}
        </h2>

        <div className="flex flex-col gap-4">
          {authType === "register" && (
            <div className="bg-blue-50 rounded-md flex items-center px-3 py-2">
              <User className="text-gray-500 h-5 w-5 mr-2" />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-transparent outline-none text-gray-700"
              />
            </div>
          )}

          <div className="bg-blue-50 rounded-md flex items-center px-3 py-2">
            <Mail className="text-gray-500 h-5 w-5 mr-2" />
            <input
              type="email"
              placeholder={authType === "login" ? "Email" : "Enter your email"}
              className="w-full bg-transparent outline-none text-gray-700"
            />
          </div>

          {authType === "register" && (
            <div className="bg-blue-50 rounded-md flex items-center px-3 py-2">
              <div className="flex items-center mr-2">
                <span className="text-gray-700 text-sm">🇧🇩 +880</span>
              </div>
              <input
                type="tel"
                placeholder="Enter your phone number"
                className="w-full bg-transparent outline-none text-gray-700"
              />
            </div>
          )}

          <div className="bg-blue-50 rounded-md flex items-center px-3 py-2">
            <Lock className="text-gray-500 h-5 w-5 mr-2" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder={
                authType === "login" ? "Password" : "Enter your password"
              }
              className="w-full bg-transparent outline-none text-gray-700"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-green-500"
            >
              {showPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </div>

          <div className="flex items-start gap-2 mt-1">
            <input
              type="checkbox"
              id="terms"
              className={`mt-1 ${
                authType === "login" ? "accent-green-500" : "accent-red-500"
              }`}
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              By creating an account you agree to our{" "}
              <span
                className={`${
                  authType === "login" ? "text-green-500" : "text-green-400"
                } underline cursor-pointer`}
              >
                Terms & Conditions
              </span>
            </label>
          </div>

          {authType === "login" && (
            <div className="text-center">
              <button className="text-gray-700 text-sm hover:underline">
                Forget Password?
              </button>
            </div>
          )}

          <button
            className={`${
              authType === "login"
                ? "bg-green-500 hover:bg-green-600"
                : "bg-[#4a4a6a] hover:bg-[#393646]"
            } text-white py-3 rounded-md font-medium transition-colors`}
          >
            {authType === "login" ? "Sign In" : "Sign Up"}
          </button>

          <div className="text-center">
            {authType === "login" && (
              <>
                <div className="flex items-center justify-center my-2">
                  <div className="flex-1 h-px bg-gray-300"></div>
                  <span className="px-4 text-gray-500">OR</span>
                  <div className="flex-1 h-px bg-gray-300"></div>
                </div>

                <button className="w-full bg-blue-50 text-gray-700 py-3 rounded-md flex items-center justify-center gap-2 mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="24px"
                    height="24px"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    />
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    />
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    />
                  </svg>
                  Login with Google
                </button>
              </>
            )}

            <div className="text-sm text-gray-700">
              {authType === "login"
                ? "Don't have an Account? "
                : "Already have an Account? "}
              <button
                onClick={handleToggle}
                className={`${
                  authType === "login" ? "text-green-500" : "text-green-400"
                } hover:underline font-medium`}
              >
                {authType === "login" ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;
