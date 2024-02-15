import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { LottieComponent } from "../components/LottieComponent/LottieComponent";
import { Copyright } from "../components/Copyright/Copyright";
import { Impressum } from "../components/Impressum/Impressum";

export const LegalStuff = () => {
  return (
    <div>
      <Header />
      <LottieComponent />
      <Impressum />
      <Footer />
      <Copyright />
    </div>
  );
};
