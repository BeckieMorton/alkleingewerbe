import { useLocation } from "react-router-dom";

import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { LottieComponent } from "../components/LottieComponent/LottieComponent";
import { Copyright } from "../components/Copyright/Copyright";
import { Impressum } from "../components/Impressum/Impressum";
import { DataProtection } from "../components/DataProtection/DataProtection";

export const LegalStuff = () => {
  const location = useLocation();
  const { from } = location.state;
  return (
    <div>
      <Header />
      <LottieComponent />
      {from === "Impressum" ? <Impressum /> : <DataProtection />}
      <Footer />
      <Copyright />
    </div>
  );
};
