import { Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
    </>
  );
}

export default App;
