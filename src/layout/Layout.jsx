import { Outlet } from "react-router-dom";
import Nav from "../pages/components/nav/Nav";
import Footer from "../pages/components/footer/Footer";

const Layout = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
