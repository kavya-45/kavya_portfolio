import { SiPython } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { SiOpencv } from "react-icons/si";
import { SiScikitlearn } from "react-icons/si";
import { motion } from "framer-motion";
import matlabLogo from "../assets/matlab-svgrepo-com.svg";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [5, -5],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
        {/* Python */}
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col justify-center items-center hover:border-yellow-400 transition-colors duration-300"
        >
          <SiPython className="text-7xl text-yellow-400" />
          <span className="mt-2 text-sm text-neutral-400">Python</span>
        </motion.div>

        {/* MATLAB - Using imported SVG */}
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col justify-center items-center hover:border-orange-600 transition-colors duration-300"
        >
          <img 
            src={matlabLogo}
            alt="MATLAB" 
            className="w-20 h-20 object-contain"
          />
          <span className="mt-2 text-sm text-neutral-400">MATLAB</span>
        </motion.div>

        {/* TensorFlow */}
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col justify-center items-center hover:border-orange-500 transition-colors duration-300"
        >
          <SiTensorflow className="text-7xl text-orange-500" />
          <span className="mt-2 text-sm text-neutral-400">TensorFlow</span>
        </motion.div>

        {/* OpenCV */}
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col justify-center items-center hover:border-red-500 transition-colors duration-300"
        >
          <SiOpencv className="text-7xl text-red-500" />
          <span className="mt-2 text-sm text-neutral-400">OpenCV</span>
        </motion.div>

        {/* Scikit-learn */}
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 flex flex-col justify-center items-center hover:border-orange-400 transition-colors duration-300"
        >
          <SiScikitlearn className="text-7xl text-orange-400" />
          <span className="mt-2 text-sm text-neutral-400">Scikit-learn</span>
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;