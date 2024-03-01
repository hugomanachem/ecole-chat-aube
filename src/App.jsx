import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import FaireUnDon from "./pages/FaireUnDon";
import DevenirVolontaire from "./pages/DevenirVolontaire";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/don" element={<FaireUnDon />} />
        <Route path="/volontaire" element={<DevenirVolontaire />} />
      </Routes>
    </>
  );
}

export default App;
