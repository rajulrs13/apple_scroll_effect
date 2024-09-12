import { Canvas } from "@react-three/fiber";
import React from "react";
import { ScrollControls } from "@react-three/drei";
import Macbook from "./Macbook";
import "./App.css";

const App = () => {
  const camera_obj = { fov: 12, position: [0, -10, 210] };

  return (
    <div id="main">
      <div id="heading-container">
        <h3 id="heading">Macbook Pro.</h3>
      </div>
      <Canvas camera={camera_obj}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 10, 10]} intensity={0.2} />
        <directionalLight position={[0, 0, 10]} intensity={1} />
        <directionalLight position={[0, -10, 10]} intensity={0.3} />

        <ScrollControls pages={1}>
          <Macbook />
        </ScrollControls>
      </Canvas>
    </div>
  );
};

export default App;
