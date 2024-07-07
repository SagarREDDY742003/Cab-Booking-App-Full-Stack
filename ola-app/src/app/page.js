import Image from "next/image";
import HomeNavbar from "./Components/HomeNavbar";
import Banner from "./Components/Banner";
import CardVideoSection from "./Components/CardVideoSection";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <main className="">
      <HomeNavbar />
      <Banner />
      <CardVideoSection />
      <Footer />
    </main>
  );
}
