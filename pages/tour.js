import Head from "next/head";
import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MetalSphere from "../components/MetalSphere";
import Tour from "../components/Tour";
import tourData from "../lib/tour-data";
import styles from "../styles/Tour.module.css";

const SceneInfo = ({ scene }) => {
  const { title, author, license, size } = scene;
  return (
    <div className={styles.sceneInfo}>
      <h3>{title}</h3>
      <dl>
        <dt>Author:</dt>
        <dd>{author}</dd>
        <dt>License:</dt>
        <dd>{license}</dd>
        <dt>Size:</dt>
        <dd>{size}</dd>
      </dl>
    </div>
  );
};

const Keytriggers = {
  prev: ["KeyA"],
  next: ["KeyD"],
};

export default function TourPage() {
  const [index, setIndex] = useState(0);

  const updateIndex = (amountToChange) => {
    const newIndex = index + amountToChange;
    setIndex(newIndex);
  };

  const keypressHandler = (e) => {
    console.log({ onkeypress: true, index });
    e.preventDefault();
    if (Keytriggers.next.includes(e.code)) {
      console.log("next");
      updateIndex(1);
    }

    if (Keytriggers.prev.includes(e.code)) {
      console.log("prev");
      updateIndex(-1);
    }
  };

  useEffect(() => {
    window.addEventListener("keypress", keypressHandler);
    return () => window.removeEventListener("keypress", keypressHandler);
  }, [keypressHandler]);

  // Normalize index to the bounds of the scenes array length
  const boundedIndex = Math.abs(index % tourData.length);
  const scene = tourData[boundedIndex];

  return (
    <div>
      <Head>
        <title>Tour Example</title>
        <meta name="description" content="React XR Starter: Tour Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ width: "100vw", height: "100vh" }}>
        <Canvas
          shadows
          gl={{ alpha: false }}
          dpr={[1, 1.5]}
          camera={{ position: [0, 0, 10], fov: 50 }}
        >
          <Tour scene={scene} />
          <MetalSphere />
          <OrbitControls />
        </Canvas>
        <SceneInfo scene={scene} />
      </main>
    </div>
  );
}
