import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import Routers from './routes/Routers'
 import { ToastContainer } from "react-toastify";



createRoot(document.getElementById("root")).render(
  <StrictMode>
   
      <BrowserRouter>
        <Routers />
        <ToastContainer position="top-center" autoClose={4000} />
      </BrowserRouter>
   
  </StrictMode>
);
