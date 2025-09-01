// import React from 'react'

// const Video = () => {
//   return (
//     <div className='h-full w-full'>
//       <video autoPlay muted loop className='h-full w-full object-cover' src="https://player.vimeo.com/progressive_redirect/playback/899938964/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6a2cb0320d09d02dcfdfa2ad504c89a510e6d93d55e9060b1b55d680fa2e2be9"></video>
//     </div>
//   )
// }

// export default Video


// VideoPlayer.jsx
import React, { forwardRef } from "react";

const Video = forwardRef((props, ref) => {
  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      className="h-full w-full object-cover"
      src="https://player.vimeo.com/progressive_redirect/playback/899938964/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6a2cb0320d09d02dcfdfa2ad504c89a510e6d93d55e9060b1b55d680fa2e2be9"
    />
  );
});

export default Video;
