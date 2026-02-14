import Sidebar from "../components/Sidebar";

const HomePage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Sidebar />
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-gray-800 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-white font-bold">Suggestion Length</span>
              <select
                name=""
                id=""
                className="bg-transparent text-gray-400 font-semibold text-sm border-none outline-none cursor-pointer"
              >
                <option value="Most Upvotes">Most Upvotes</option>
                <option value="Least Upvotes">Least Upvotes</option>
                <option value="Most Comments">Most Comments</option>
                <option value="Leaset Comments">Least Comments</option>
              </select>
            </div>
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all whitespace-normal">
            + Add Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
