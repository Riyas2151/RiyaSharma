import React, { useRef } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLocation } from 'react-router-dom';

const Stairs = (props) => {
   const currentPath= useLocation().pathname
    const stairparentRef = useRef(null)
    const pageRef = useRef(null)

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

  gsap.from(pageRef.current,{
    opacity:0,
    delay:1.2,
    // scale:1.2
  })

},[currentPath])

console.log(props.children);


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
      <div ref={pageRef}>
        {props.children}
      </div>
    </>
  )
}

export default Stairs