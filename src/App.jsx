import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

import JsonFormatter from "./tools/JsonFormatter";
import JsonValidator from "./tools/JsonValidator";
import Base64Tool from "./tools/Base64Tool";
import UuidGenerator from "./tools/UuidGenerator";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/json-formatter"
            element={<JsonFormatter />}
          />

          <Route
            path="/json-validator"
            element={<JsonValidator />}
          />

          <Route
            path="/base64"
            element={<Base64Tool />}
          />

          <Route
            path="/uuid"
            element={<UuidGenerator />}
          />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;