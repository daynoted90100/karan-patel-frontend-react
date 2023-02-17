import React, { useEffect, useRef } from "react";
import * as THREE from "three";
// import VANTA from "vanta/dist/vanta.birds.min.js";
import BIRDS from 'vanta/dist/vanta.birds.min';
import './App.css';
import LettersAnimation from "./LettersAnimation";
import MagicStarAnimation from "./MagicStarAnimation";

window.THREE = THREE;

function App() {

const vantaRef = useRef(null);

  useEffect(() => {
    const birdBackground = BIRDS({
      el: vantaRef.current,
      THREE: THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      backgroundColor: 0x0,
      color1: 0x1f00ff,
      color2: 0xfaed00,
      colorMode: "lerp",
      birdSize: 1.90,
      wingSpan: 18.00,
      separation: 45.00,
      alignment: 45.00,
      cohesion: 1.00
    });

    return () => {
      if (birdBackground) {
        birdBackground.destroy();
      }
    };
  }, []);

  const text = 'DayNoted';

  return (
        <>
            <div id="vanta-net" ref={vantaRef}>
                
            </div>
            <div className="vanta-content">
                <div>
                    <MagicStarAnimation />
                    {/* <LettersAnimation text={text} /> */}
                    <p>Coming soon...</p>
                </div>
            </div>
        </>
    );
}

export default App;