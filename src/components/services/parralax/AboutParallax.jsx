import './parallax.scss'
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import par from "../../../assets/aboutParallaxBG.jpg";

const AboutParallax = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageParallaxAnimation = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "60%"]
  );
  const textParallaxAnimation = useTransform(
    scrollYProgress,
    [0,0.25, 0.5, 0.75, 1],
    ["-300%","0%", "100%", "200%","280%"]
  );
  const textScaleAnimation = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 1.2, 1.5] // Adjust the scaling values as needed
  );


  return (
    <div className="parallax" ref={ref}>
      <motion.img style={{ y: imageParallaxAnimation }} src={par} alt="" />
      <motion.div
        className="title"
        style={{
          y: textParallaxAnimation,
          scale: textScaleAnimation,
        }}
      >
        Who We Are
      </motion.div>
    </div>
  );
}

export default AboutParallax