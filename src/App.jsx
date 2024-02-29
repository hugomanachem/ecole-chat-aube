import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import FaireUnDon from "./pages/FaireUnDon";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/don" element={<FaireUnDon />} />
      </Routes>
    </>
  );
}

export default App;
