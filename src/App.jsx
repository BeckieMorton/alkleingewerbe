import { BrowserRouter, NavLink, Routes } from "react-router-dom";

import routes from "./routes/routes";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <ul className="app-ul">
            <li className="app-li">
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>{routes}</Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
