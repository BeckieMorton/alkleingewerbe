import { useEffect } from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { LottieComponent } from "../components/LottieComponent/LottieComponent";
import { Copyright } from "../components/Copyright/Copyright";

import { About } from "../components/About/About";
import { ServicesAv } from "../components/ServicesAv/ServicesAv";
import { References } from "../components/References/References";

export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <LottieComponent />
      <About />
      <ServicesAv />
      <References />
      <Footer />
      <Copyright />
    </div>
  );
};
