import React, { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLocation } from 'react-router-dom';

const Stairs = () => {
   const currentPath= useLocation().pathname
    const stairparentRef = useRef(null)

useGSAP(function(){
    
const tl=gsap.timeline()

tl.to(stairparentRef.current,{
  display:'block'
})
  tl.from('.stairs',{
    height:0,
    stagger:{
      amount:-0.23
    }
  })
  tl.to('.stairs',{
    y:'100%',
    stagger:{
      amount:-0.23
    }
  })
  tl.to(stairparentRef.current,{
    display:'none'
  })
  tl.to('.stairs',{
    y:'0%'
  })


},[currentPath])

  return (
    <>
      <div ref={stairparentRef} className="h-screen w-full top-0 fixed z-9999"> 
      <div className="h-full w-full flex">
        <div className="stairs h-full w-1/5 bg-black"></div>
        <div className="stairs h-full w-1/5 bg-black"></div>
        <div className="stairs h-full w-1/5 bg-black"></div>
        <div className="stairs h-full w-1/5 bg-black"></div>
        <div className="stairs h-full w-1/5 bg-black"></div>
        <div className="stairs h-full w-1/5 bg-black"></div>
        <div className="stairs h-full w-1/5 bg-black"></div>
        </div>

      </div>
    </>
  )
}

export default Stairs