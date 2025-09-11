import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StatusProvider } from "./context/StatusContext";
import VcfDownload from "./pages/VcfDownload";
import Home from "./pages/Home";

export default function App() {
  return (
    <StatusProvider>
      <Router>
        {/* Home luôn luôn hiển thị */}
        <Home />
        <Routes>
          {/* Route động cho download */}
          <Route path="/:slug" element={<VcfDownload />} />
          {/* Trang chủ */}
          <Route path="/" element={null} />
        </Routes>
      </Router>
    </StatusProvider>
  );
}
