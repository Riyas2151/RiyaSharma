// import React from 'react'
// import Video from './Video'

// const HomeHeroText = () => {
//   return (
//     <div className='font-[font1] pt-5 text-center text-white flex flex-col items-center justify-center gap-2'>
//         <div className='text-[8vw] uppercase leading-[8vw]'>From pixels to perfection,</div>
//         <div className='text-[7vw] uppercase leading-[7vw] flex items-center justify-center'>
//             see
//             <div className='h-[7vw] w-[14vw] rounded-full overflow-hidden mx-4'>
//                 <Video />
//             </div>
//             creativity
//         </div>
//         <div className='text-[8vw] uppercase leading-[8vw]'>turning into<br /> reality</div>
//     </div>
//   )
// }

// export default HomeHeroText

// import React from 'react'
// import Video from './Video'

// const HomeHeroText = () => {
//   return (
//     <div className="font-[font1] pt-5 text-center text-white flex flex-col items-center justify-center gap-2 px-4">
//       <div className="uppercase leading-tight 
//         text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
//         From pixels to perfection,
//       </div>

//       <div className="uppercase flex items-center justify-center leading-tight
//         text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
//         see
//         <div className="mx-2 sm:mx-3 md:mx-4 h-8 w-16 sm:h-10 sm:w-20 md:h-14 md:w-28 lg:h-20 lg:w-40 rounded-full overflow-hidden">
//           <Video />
//         </div>
//         creativity
//       </div>

//       <div className="uppercase leading-tight 
//         text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
//         turning into <br /> reality
//       </div>
//     </div>
//   )
// }

// export default HomeHeroText




// import React from "react";
// import { motion } from "framer-motion";
// import Video from "./Video";

// const HomeHeroText = () => {
//   return (
//     <div className="font-[font1] text-center text-white flex flex-col items-center justify-center gap-4 px-4">
      
//       {/* Top line */}
//       <motion.div
//         initial={{ y: 40, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="uppercase leading-[1.1] 
//           text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
//       >
//         From pixels to perfection,
//       </motion.div>

//       {/* Middle line with video inside */}
//       <motion.div
//         initial={{ y: 40, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         className="uppercase flex items-center justify-center leading-[1.1]
//           text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl"
//       >
//         see
//         <div className="mx-2 sm:mx-3 md:mx-4 
//           h-[6vw] w-[12vw] max-h-20 max-w-40 rounded-full overflow-hidden">
//           <Video />
//         </div>
//         creativity
//       </motion.div>

//       {/* Bottom line */}
//       <motion.div
//         initial={{ y: 40, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
//         className="uppercase leading-[1.1] 
//           text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
//       >
//         turning into <br /> reality
//       </motion.div>
//     </div>
//   );
// };

// export default HomeHeroText;


import React from "react";
import { motion } from "framer-motion";
import Video from "./Video";

const HomeHeroText = () => {
  return (
    <div className="font-[font1] text-center text-white flex flex-col items-center justify-center gap-4 px-4">
      
      {/* Top line */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="uppercase leading-[1.1] 
          text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
      >
        From pixels to perfection,
      </motion.div>

      {/* Middle line with video inside */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="uppercase flex items-center justify-center leading-[1.1]
          text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl"
      >
        see
        <div className="mx-2 sm:mx-3 md:mx-4 
          h-[6vw] w-[12vw] max-h-20 max-w-40 rounded-full overflow-hidden">
          <Video />
        </div>
        creativity
      </motion.div>

      {/* Bottom line with animated stroke */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="uppercase leading-[1.1] 
          text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl"
      >
        turning into <br /> 
        <span className="relative inline-block">
          reality
          {/* Animated SVG behind text */}
          <svg
            viewBox="0 0 1090.8515625 168.6796875"
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-[120%] h-[140%] pointer-events-none"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="4"
          >
            <defs>
              <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
                {/* <stop offset="0%" stopColor="#ff6ec4" />
                <stop offset="100%" stopColor="#7873f5" /> */}
                <stop offset="0%" stopColor="#D3FD50" />
                <stop offset="100%" stopColor="#D3FD50" />
              </linearGradient>
            </defs>
            <motion.ellipse
              cx="545.42578125"
              cy="84.33984375"
              rx="543.42578125"
              ry="82.33984375"
              strokeDasharray="2213.38 29.2784"
              strokeDashoffset="0"
              animate={{ strokeDashoffset: [-0, -2242.66] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </svg>
        </span>
      </motion.div>
    </div>
  );
};

export default HomeHeroText;
