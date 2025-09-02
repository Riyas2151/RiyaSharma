import React, { useRef, useState } from "react";
import Loader from "./components/Loader";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agence from "./pages/Agence";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "./components/Navigation/Navbar";
import FullScreenNav from "./components/Navigation/FullScreenNav";

function App() {
  // const [loading, setLoading] = useState(true);
 

  return (
    <div className="min-h-screen">
      {/* <Navbar/> */}
      <FullScreenNav/>

      {/* <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/agence" element={<Agence />}/>
        <Route path="/projects" element={<Projects />}/>
      </Routes> */}
      {/* {loading && <Loader setLoading={setLoading} />}
      {!loading && (
        <div className="p-10">
          <h1>Radhe Radhe</h1>
          {/* <Hero/> */}
          {/* <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1> */}
          {/* <p className="mt-4">The story begins...</p> */}
        {/* </div> */}
      {/* )} */} 
    </div>
  );
}

export default App;
