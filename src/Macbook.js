import React from "react";
import { useGLTF, useScroll, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Macbook = () => {
  const macbook_model = useGLTF("./macbook.glb");
  const wallpaper = useTexture("./wallpaper.jpg");

  // depth first search of all mesh objects
  // in the 3d model and storing their refs
  let meshes = {};
  macbook_model.scene.traverse((mesh) => {
    meshes[mesh.name] = mesh;
  });

  // closing the lid of the laptop
  meshes.screen.rotation.x = Math.PI;

  // setting the wallpaper
  meshes.matte.material.map = wallpaper;

  // adjusting material properties
  meshes.matte.material.roughness = 0.9;
  meshes.matte.material.metalness = 0.2;
  meshes.matte.material.emissiveIntensity = -0.03;

  // logic to open/close the lid on scrolling
  let scroll_info = useScroll();
  useFrame(() => {
    meshes.screen.rotation.x = Math.PI - (Math.PI / 2) * scroll_info.offset;
  });

  return (
    <group position={[0, -10, 20]}>
      <primitive object={macbook_model.scene} />
    </group>
  );
};

export default Macbook;
