import React from 'react'

const FullScreenNav = () => {
    return (
        <div id='fullscreen' className='h-screen text-white py-40 w-full absolute bg-amber-600'>
            <div className="" id='alllinks'>
                <div className='link border-t-1 border-white'>
                    <h1 className='font-[font2] leading-[0.8] pt-3 text-center text-[8vw] uppercase'>Projects</h1>
                    <div className="absolute flex ">
                        <div className='flex items-center'>
                            <h2 className='-font-[font2] leading-[0.8] pt-3 text-center text-[8vw] uppercase'>See What we Did</h2>
                            <img src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                            <h2 className='-font-[font2] leading-[0.8] pt-3 text-center text-[8vw] uppercase'>See What we Did</h2>
                            <img src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                        </div>
                        {/* <div>
                            <h2 >See What we Did</h2>
                            <img src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                            <h2>See What we Did</h2>
                            <img src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav