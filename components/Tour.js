import { Suspense } from "react";
import { Environment } from "@react-three/drei";

export default function Tour(props) {
  const { scene } = props;

  return (
    <Suspense fallback={null}>
      <Environment background={true} files={scene.hdri} />
    </Suspense>
  );
}
