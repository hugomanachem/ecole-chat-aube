import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import FaireUnDon from "./pages/FaireUnDon";
import DevenirVolontaire from "./pages/DevenirVolontaire";
import SelectionHoraire from "./pages/SelectionHoraire";
import NosChats from "./pages/NosChats";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/don" element={<FaireUnDon />} />
        <Route path="/volontaire" element={<DevenirVolontaire />} />
        <Route
          path="/volontaire/selection_horaire"
          element={<SelectionHoraire />}
        />
        <Route path="/chats" element={<NosChats />} />
      </Routes>
    </>
  );
}

export default App;
