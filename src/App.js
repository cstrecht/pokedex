import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

//Components:
import Modal from "./components/Modal/Modal";
import Homepage from "./pages/Homepage";
import NotFound from "./components/ErrorPage/NotFound";

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;
  return (
    <div>
      <Routes location={background || location}>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<Modal />} />
        <Route path="/404" element={<NotFound />} />
      </Routes>
      {background && (
        <Routes>
          <Route path="/:id" element={<Modal />} />
        </Routes>
      )}
    </div>
  );
}
export default App;
