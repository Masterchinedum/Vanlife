import Navbar from "./Navbar";
import { Outlet } from 'react-router-dom';
import Footer from "./Footer";
import Sidebar from "../pages/host/Sidebar";

const Layout = () => {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout