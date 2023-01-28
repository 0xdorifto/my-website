import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Art from "./pages/Art";
import Auto from "./pages/Auto";
import Homepage from "./pages/Homepage";
import Music from "./pages/Music";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auto" element={<Auto />} />
        <Route path="/art" element={<Art />} />
        <Route path="/music" element={<Music />} />
      </Routes>
    </>
  );
};

export default App;
