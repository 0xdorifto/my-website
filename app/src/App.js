import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Art from "./pages/Art";
import Vehicles from "./pages/Vehicles";
import Music from "./pages/Music";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/art" element={<Art />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </>
  );
};

export default App;
