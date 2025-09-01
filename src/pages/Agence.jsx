import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageRef = useRef(null);
  const imageDivRef = useRef(null);

  const imageArray = [
    "/Work/1.jpg",
    "/Work/2.jpg",
    "/Work/3.jpg",
    "/Work/4.jpg",
    "/Work/5.jpg",
    "/Work/6.jpg",
    "/Work/7.jpg",
    "/Work/8.jpg",
    "/Work/9.jpg",
    "/Work/10.jpg",
  ];

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: "top 36%",
        end: "top -100%",
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          let imageIndex;
          if (self.progress < 1) {
            imageIndex = Math.floor(self.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          imageRef.current.src = imageArray[imageIndex];
        },
      },
    });
  });

  return (
    <>
      <div className="h-full bg-white text-black section1">
        <div
          ref={imageDivRef}
          className="absolute h-[20vw] w-[15vw] rounded-4xl top-60 overflow-hidden left-[30vw] bg-black"
        >
          <img
            ref={imageRef}
            className="h-full object-cover w-full"
            src="/Work/1.jpg"
            alt=""
          />
        </div>
        <div className="relative font-[font2] ">
          <div className=" mt-[55vh]">
            <h1 className="text-[19vw] text-center uppercase leading-[18vw] ">
              Soixan7e
              <br />
              Douze
            </h1>
          </div>
          <div className="pl-[40%] mt-0">
            <p className="text-5xl -leading-[6vw] w-[100%]">
              &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité.
              On reste humbles et on dit non aux gros egos, même le vôtre. Une
              marque est vivante. Elle a des valeurs, une personnalité, une
              histoire. Si on oublie ça, on peut faire de bons chiffres à court
              terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à
              donner de la perspective, pour bâtir des marques influentes.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </>
  );
};

export default Agence;
