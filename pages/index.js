import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import InlineExample from "../components/InlineExample";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>React XR Starter</title>
        <meta name="description" content="React XR Starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>
        <div>
          <h2>Inline Example</h2>
          <InlineExample />
        </div>

        <div>
          <h2>Dedicate Page Example</h2>
          <Link href="/dedicated">
            <a>Go to example</a>
          </Link>
        </div>

        <div>
          <h2>Demo Tour</h2>
          <Link href="/tour">
            <a>Go to example</a>
          </Link>
        </div>

        <div>
          <h2>VR Demo Tour</h2>
          <Link href="/vr-tour">
            <a>Go to example</a>
          </Link>
        </div>
      </main>
    </div>
  );
}
