import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col	">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
