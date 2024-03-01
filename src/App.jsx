import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import FaireUnDon from "./pages/FaireUnDon";
import DevenirVolontaire from "./pages/DevenirVolontaire";
import SelectionHoraire from "./pages/SelectionHoraire";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/don" element={<FaireUnDon />} />
        <Route path="/volontaire" element={<DevenirVolontaire />} />
        <Route path="/volontaire/selection_horaire" element={<SelectionHoraire />} />
      </Routes>
    </>
  );
}

export default App;
