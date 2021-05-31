import Head from "next/head";
import InlineExample from "../components/InlineExample";

export default function Dedicated() {
  return (
    <div>
      <Head>
        <title>Dedicated Page Example</title>
        <meta
          name="description"
          content="React XR Starter: Dedicated Page Example"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ width: "100vw", height: "100vh" }}>
        <InlineExample />
      </main>
    </div>
  );
}
