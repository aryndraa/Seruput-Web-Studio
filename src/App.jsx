import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Layanan from "./pages/Layanan";
import PaketWeb from "./pages/PaketWeb";
import JasaLainnya from "./pages/JasaLainnya";
import Kontak from "./pages/Kontak";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/layanan" Component={Layanan} />
        <Route path="/paket-website" Component={PaketWeb} />
        <Route path="/jasa-lainnya" Component={JasaLainnya} />
        <Route path="/kontak" Component={Kontak} />
      </Routes>
    </div>
  );
}

export default App;
