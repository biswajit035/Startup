import "./navbar.scss";
import logo from "../../assets/logo.png";
import Navlink from "./Navlink";
import { motion } from "framer-motion";

const Navbar = () => {
    const logoAnimation = {
      initial: { opacity: 0, scale: 0 },
      animate: { opacity: 1, scale: 1 },
      transition: {  duration: 0.7 },
    };

  return (
    <div className="navContainer">
      <div className="navbar">
        <motion.img {...logoAnimation} className="logo" src={logo} alt="" />
        <Navlink />
      </div>
    </div>
  );
};

export default Navbar;
