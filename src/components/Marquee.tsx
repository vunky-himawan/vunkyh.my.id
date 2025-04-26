import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const Marquee = ({ children }: Props) => {
  return (
    <>
      <motion.div
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        initial={{ x: "0%" }}
        animate={{ x: `-100%` }}
        className="flex flex-shrink-0 gap-x-2 juscify-center items-center"
      >
        {children}
      </motion.div>
    </>
  );
};

export default Marquee;
