import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-3'>
      <Link className='text-[5vw] border-5 border-white leading-[6vw] hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full px-10 uppercase' to='/projects'> Projects</Link>
      <Link className='text-[5vw] border-5 border-white leading-[6vw] hover:border-[#D3FD50] hover:text-[#D3FD50] rounded-full px-10 uppercase' to='/agence'> Agence</Link>
    </div>
  )
}

export default HomeBottomText


// import React from 'react'
// import { Link } from 'react-router-dom'

// const HomeBottomText = () => {
//   return (
//     <div className="font-[font2] flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
//       <Link
//         to="/projects"
//         className="uppercase border-4 border-white rounded-full px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4
//           text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl
//           hover:border-[#D3FD50] hover:text-[#D3FD50] transition"
//       >
//         Projects
//       </Link>

//       <Link
//         to="/agence"
//         className="uppercase border-4 border-white rounded-full px-4 sm:px-6 md:px-10 py-2 sm:py-3 md:py-4
//           text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl
//           hover:border-[#D3FD50] hover:text-[#D3FD50] transition"
//       >
//         Agence
//       </Link>
//     </div>
//   )
// }

// export default HomeBottomText
