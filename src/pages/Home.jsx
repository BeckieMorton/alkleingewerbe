import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { LottieComponent } from "../components/LottieComponent/LottieComponent";
import { Copyright } from "../components/Copyright/Copyright";

import { About } from "../components/About/About";
import { ServicesAv } from "../components/ServicesAv/ServicesAv";

export const Home = () => {
  // Rendering the component's JSX
  return (
    <div>
      <Header />
      <LottieComponent />
      <ServicesAv />
      <About />
      <Footer />
      <Copyright />
    </div>
  );
};
