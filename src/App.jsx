import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RoadmapPage from "./pages/RoadmapPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 p-4 md:p-8">
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="details" element={<DetailsPage />} />
            <Route path="roadmap" element={<RoadmapPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
