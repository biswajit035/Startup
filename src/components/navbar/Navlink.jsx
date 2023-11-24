/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const Navlink = ({isOpen,handleClick}) => {
  const navlinkAnimaton = {
    initial: {
      y: -200,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };
  const navlinkAnimatonMobile = {

    initial: {
      x:-200,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.1,
      },
    },
  };
  const list = [
    {
      title: "Home",
      link: "#Home",
    },
    {
      title: "About",
      link: "#About",
    },
    {
      title: "Services",
      link: "#Services",
    },
    {
      title: "Work",
      link: "#Work",
    },
    {
      title: "Pricing",
      link: "#Pricing",
    },
    {
      title: "Blog",
      link: "#Blog",
    },
    {
      title: "Contact",
      link: "#Contact",
    },
  ];

const laptop = true;

  return (
    <>
      {laptop   && (
        <motion.div
          initial="initial"
          animate="animate"
          variants={isOpen ? navlinkAnimatonMobile : navlinkAnimaton}
          className={`navlink ${isOpen ? "show" : "hide"}`}
          onClick={handleClick}
        >
          {list.map((item, idx) => (
            <motion.a
              variants={isOpen ? navlinkAnimatonMobile : navlinkAnimaton}
              href={item.link}
              key={idx}
            >
              {item.title}
            </motion.a>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Navlink;
