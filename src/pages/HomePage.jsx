import { useDispatch, useSelector } from "react-redux";
import FeedbackList from "../components/FeedbackList";
import FeedbackModalBox from "../components/FeedbackModalBox";
import Sidebar from "../components/Sidebar";
import { useLocation, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { addSuggestion, toggleUpvote } from "../store/feedbackSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const suggestions = useSelector((state) => state.feedback.suggestions);
  const [filterCategory, setFilterCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Most Upvotes");

  const modelOpen = location.pathname === "/add";
  const roadmapCounts = useMemo(
    () => ({
      planned: suggestions.filter(
        (suggestion) => suggestion.status === "Planned",
      ).length,

      inProgress: suggestions.filter(
        (suggestion) => suggestion.status === "In Progress",
      ).length,

      live: suggestions.filter((suggestion) => suggestion.status === "Live")
        .length,
    }),
    [suggestions],
  );
  const openAdd = () => navigate("/add");
  const closeModal = () => navigate(-1);

  const handleAdd = (payload) => {
    dispatch(addSuggestion(payload));
    closeModal();
  };

  const handleUpvotes = (id) => dispatch(toggleUpvote(id));
  const handleView = (item) => {
    navigate(`/feedback/${item.id}`);
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Sidebar
          filterCategory={filterCategory}
          setFilterCategory={setFilterCategory}
          roadmapCounts={roadmapCounts}
          openRoadmap={() => navigate("/roadmap")}
          openAdd={openAdd}
        />
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-gray-800 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-white font-bold">
                {suggestions.length} Suggestions
              </span>
              <select
                name=""
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                id=""
                className="bg-transparent text-gray-400 font-semibold text-sm border-none outline-none cursor-pointer"
              >
                <option value="Most Upvotes">Most Upvotes</option>
                <option value="Least Upvotes">Least Upvotes</option>
                <option value="Most Comments">Most Comments</option>
                <option value="Least Comments">Least Comments</option>
              </select>
            </div>
            <button
              onClick={openAdd}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all whitespace-normal"
            >
              + Add Feedback
            </button>
          </div>
          <FeedbackList
            suggestions={suggestions}
            filterCategory={filterCategory}
            onUpvotes={handleUpvotes}
            sortBy={sortBy}
            onView={handleView}
          />
        </div>
      </div>
      {location.pathname === "/add" && (
        <FeedbackModalBox
          isOpen={modelOpen}
          isClose={closeModal}
          onAdd={handleAdd}
          editingFeedback={null}
        />
      )}
    </div>
  );
};

export default HomePage;
