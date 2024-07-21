'use client'

import Banner from "./Components/User/HomePage/Banner";
import HomeNavbar from "./Components/User/HomePage/HomeNavbar";
import CardVideoSection from "./Components/User/HomePage/CardVideoSection";
import Footer from "./Components/User/HomePage/Footer";

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
