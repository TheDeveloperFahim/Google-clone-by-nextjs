import Head from "next/head";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header Component */}
      <Header />
      {/* Body Component */}
      <Body />
      {/* Footer Component */}
      <Footer />
    </div>
  );
}

// https://youtu.be/24xpTmaPOdY?t=5525
