// // src/components/Loader.jsx
// import { useEffect, useState } from "react";

// const greetings = [
//   { text: "Hello", lang: "English" },
//   { text: "你好", lang: "Chinese" },
//   { text: "こんにちは", lang: "Japanese" },
//   { text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", lang: "Punjabi" },
//   { text: "नमस्ते", lang: "Hindi" },
//   { text: "जय श्री राधे", lang: "Hindi" },
// ];

// export default function Loader({ onFinish }) {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     if (index < greetings.length - 1) {
//       const timer = setTimeout(() => setIndex(index + 1), 700); // ⚡ faster
//       return () => clearTimeout(timer);
//     } else {
//       const finishTimer = setTimeout(() => onFinish(), 700);
//       return () => clearTimeout(finishTimer);
//     }
//   }, [index, onFinish]);

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-[#121214] text-white text-6xl font-space font-thin word-spacing-wide ">
//       <span>{greetings[index].text}</span>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = ({ setLoading }) => {
  const words = ["Hello","你好", "こんにちは", "안녕하세요","ਸਤ ਸ੍ਰੀ ਅਕਾਲ","नमस्ते", "जय श्री राधे"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < words.length - 1) {
      const timer = setTimeout(() => setIndex((i) => i + 1), 700); 
      return () => clearTimeout(timer);
    } else {
      // After last word → trigger exit
      const timeout = setTimeout(() => {
        setLoading(false);  // ✅ call parent to hide loader
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [index, setLoading]);

  return (
    <AnimatePresence>
      <motion.div
        key="loader"
        className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center text-white text-4xl font-light z-50"
        initial={{ y: 0 }}
        exit={{ y: "-100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {words[index]}
      </motion.div>
    </AnimatePresence>
  );
};

export default Loader;
