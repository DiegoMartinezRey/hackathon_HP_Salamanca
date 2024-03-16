import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Community from "./pages/communityActivities/Community";
import Help from "./pages/help/Help";
import HomePage from "./pages/homePage/HomePage";
import Multiplayer from "./pages/multiplayer/Multiplayer";
import SinglePerson from "./pages/singlePerson/SinglePerson";
import TypeGame from "./pages/typeGame/TypeGame";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/typeOfGame" element={<TypeGame />} />
          <Route path="/single" element={<SinglePerson />} />
          <Route path="/multi" element={<Multiplayer />} />
          <Route path="/community" element={<Community />} />
          <Route path="/help" element={<Help />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
