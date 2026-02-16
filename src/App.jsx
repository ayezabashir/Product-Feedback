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
            <Route path="feedback/:id" element={<DetailsPage />} />
            <Route path="feedback/:id/edit" element={<DetailsPage />} />
            <Route path="roadmap" element={<RoadmapPage />} />
            <Route path="add" element={<HomePage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
