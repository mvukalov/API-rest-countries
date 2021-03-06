import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./pages/HomePage";
import Country from "./pages/Country.js";
import "./stylesheets/HomePage.css";
import "./stylesheets/Country.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/countries/:name" element={<Country />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
