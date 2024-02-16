import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { LottieComponent } from "../components/LottieComponent/LottieComponent";
import { Copyright } from "../components/Copyright/Copyright";

import { About } from "../components/About/About";
import { ServicesAv } from "../components/ServicesAv/ServicesAv";
import { Backtotop } from "../components/Backtotop/Backtotop";

export const Home = () => {
  return (
    <div>
      <Header />
      <LottieComponent />
      <ServicesAv />
      <About />
      <Backtotop />
      <Footer />
      <Copyright />
    </div>
  );
};
