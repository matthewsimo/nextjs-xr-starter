import Head from "next/head";
import dynamic from "next/dynamic";
import Tour from "../components/Tour";
import tourData from "../lib/tour-data";

const VRCanvas = dynamic(() =>
  import("@react-three/xr").then((mod) => mod.VRCanvas)
);
const DefaultXRControllers = dynamic(() =>
  import("@react-three/xr").then((mod) => mod.DefaultXRControllers)
);

export default function VRTour() {
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
        <meta name="description" content="React XR Starter: VRTour Example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ width: "100vw", height: "100vh" }}>
        <VRCanvas shadows gl={{ alpha: false }} dpr={[1, 1.5]}>
          <DefaultXRControllers />
          <Tour scenes={tourData} />
        </VRCanvas>
      </main>
    </div>
  );
}
