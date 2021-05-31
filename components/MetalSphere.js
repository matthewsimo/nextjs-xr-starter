import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function MetalSphere(props) {
  const sphere = useRef();
  useFrame((state, delta) => {
    const { elapsedTime } = state.clock;
    const yPos = Math.sin(elapsedTime); // -1..1 position
    sphere.current.position.y = yPos;
  });
  return (
    <mesh ref={sphere}>
      <sphereBufferGeometry args={[1, 128, 32]} />
      <meshStandardMaterial metalness={1} roughness={0} />
    </mesh>
  );
}
