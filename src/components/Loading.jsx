import styles from "../style";
import { motion } from "framer-motion";
import { mohit } from "../assets";

const Loading = () => {
  return (
    <motion.div
      id="loading"
      className={`w-[100vw] h-[100vh] flex "${styles.flexCenter}`}
      initial={{ scale: 1.0, opacity: 0.25 }}
      animate={{ scale: 2.2, opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <img src={mohit} alt="Mohit bhardwaj" className="w-[120px] h-[120px]" />
    </motion.div>
  );
};

export default Loading;
