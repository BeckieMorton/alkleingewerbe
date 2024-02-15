import { Route } from "react-router-dom";
import { Home } from "../pages/Home";

import { LegalStuff } from "../pages/LegalStuff";

const routes = (
  <>
    <Route path="/" element={<Home />} />
    <Route path="/LegalStuff" element={<LegalStuff />} />
  </>
);

export default routes;
