import Head from "next/head";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Tour from "../components/Tour";
import tourData from "../lib/tour-data";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useXREvent } from "@react-three/xr";

const VRCanvas = dynamic(() =>
  import("@react-three/xr").then((mod) => mod.VRCanvas)
);
const DefaultXRControllers = dynamic(() =>
  import("@react-three/xr").then((mod) => mod.DefaultXRControllers)
);

const SceneInfoText = (props) => (
  <Text {...props} color="#000" anchorX="center" anchorY="middle" />
);

const SceneInfo = ({ scene, updateIndex }) => {
  useXREvent(
    "select",
    (e) => {
      console.log({ useXREvent: "select back", e });
      updateIndex(-1);
    },
    { handedness: "left" }
  );

  useXREvent(
    "select",
    (e) => {
      console.log({ useXREvent: "select next", e });
      updateIndex(1);
    },
    { handedness: "right" }
  );
  const { title, author, license, size } = scene;
  return (
    <group>
      <SceneInfoText position={[0, 1, 0.06]} fontSize={0.5}>
        {title}
      </SceneInfoText>
      <SceneInfoText position={[0, 0.5, 0.06]} fontSize={0.35}>
        Author: {author}
      </SceneInfoText>
      <SceneInfoText position={[0, 0.1, 0.06]} fontSize={0.35}>
        License: {license}
      </SceneInfoText>
      <SceneInfoText position={[0, -0.3, 0.06]} fontSize={0.35}>
        Size: {size}
      </SceneInfoText>
    </group>
  );
};

export default function VRTour() {
  const [index, setIndex] = useState(0);

  const updateIndex = (amountToChange) => {
    const newIndex = index + amountToChange;
    setIndex(newIndex);
  };

  // Normalize index to the bounds of the scenes array length
  const boundedIndex = Math.abs(index % tourData.length);
  const scene = tourData[boundedIndex];
  return (
    <div>
      <Head>
        <title>Tour Example</title>
        <meta name="description" content="React XR Starter: VRTour Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ width: "100vw", height: "100vh" }}>
        <VRCanvas shadows gl={{ alpha: false }} dpr={[1, 1.5]}>
          <DefaultXRControllers />
          <SceneInfo scene={scene} updateIndex={updateIndex} />
          <Tour scene={scene} />
        </VRCanvas>
      </main>
    </div>
  );
}
