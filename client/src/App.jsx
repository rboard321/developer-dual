import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar} from "./components";
import Home from "./screens/Home";


import Duel from "./screens/Duel";
import Inspect from "./screens/Inspect";

const App = () => {
  // Hook that runs after React has updated the DOM
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inspect" element={<Inspect />} />
        <Route path="/duel" element={<Duel />} />
      </Routes>
    </>
  );
};

export default App;
