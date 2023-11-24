import logo from "../../assets/logo.png";
import Navlink from "./Navlink";
import { motion } from "framer-motion";
import MenuButton from './MenuButton'
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

    const menuButtonStyle = {
      marginLeft: "2rem",
    };

    const logoAnimation = {
      initial: { opacity: 0, scale: 0 },
      animate: { opacity: 1, scale: 1 },
      transition: {  duration: 0.7 },
    };

  return (
    <div className="navContainer">
      <div className="navbar">
        <motion.img {...logoAnimation} className="logo" src={logo} alt="" />
        <MenuButton
          isOpen={isOpen}
          onClick={() => setOpen(!isOpen)}
          strokeWidth="3"
          color="#3399cc"
          transition={{ ease: "easeOut", duration: 0.2 }}
          width="25"
          height="15"
          style={menuButtonStyle}
        />
        <Navlink />
      </div>
    </div>
  );
};

export default Navbar;
