import { motion } from "framer-motion";

const Navlink = () => {
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
        }
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
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={navlinkAnimaton}
      className="navlink"
    >
      {list.map((item, idx) => (
        <motion.a
          variants={navlinkAnimaton}
          href={item.link}
          key={idx}
        >
          {item.title}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Navlink;
