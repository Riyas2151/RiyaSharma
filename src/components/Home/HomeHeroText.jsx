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

import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className="font-[font1] pt-5 text-center text-white flex flex-col items-center justify-center gap-2 px-4">
      <div className="uppercase leading-tight 
        text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
        From pixels to perfection,
      </div>

      <div className="uppercase flex items-center justify-center leading-tight
        text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
        see
        <div className="mx-2 sm:mx-3 md:mx-4 h-8 w-16 sm:h-10 sm:w-20 md:h-14 md:w-28 lg:h-20 lg:w-40 rounded-full overflow-hidden">
          <Video />
        </div>
        creativity
      </div>

      <div className="uppercase leading-tight 
        text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl">
        turning into <br /> reality
      </div>
    </div>
  )
}

export default HomeHeroText




