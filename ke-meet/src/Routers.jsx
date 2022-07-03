import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RoomInfoHost from "./routes/RoomInfoHost";
import Hamburger from "./routes/Hamburger";

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/host/roomInfo" element={<RoomInfoHost />} />
        <Route path="/hamburger" element={<Hamburger />} />
      </Routes>
    </Router>
  );
}

export default Routers;
