import FeedbackItems from "./FeedbackItems";

const FeedbackList = ({
  suggestions,
  filterCategory,
  sortBy,
  onUpvotes,
  onView,
}) => {
  const filtered = suggestions.filter(
    (suggestion) =>
      filterCategory === "All" || suggestion.category === filterCategory,
  );
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "Most Upvotes") return b.upvotes - a.upvotes;
    if (sortBy === "Least Upvotes") return b.upvotes - a.upvotes;
    if (sortBy === "Most Comments") return b.comments - a.comments;
    if (sortBy === "Least Comments") return b.comments - a.comments;
  });

  if (sortBy.length === 0) {
    return (
      <div className="bg-white rounded-xl p-12 text-center">
        <p className="text-gray-500 text-lg">No suggestions found. Add One!</p>
      </div>
    );
  }
  return (
    <div className="space-y-4">
      {sorted.map((sorted) => (
        <FeedbackItems
          key={sorted.id}
          suggestions={sorted}
          onUpvotes={onUpvotes}
          sortBy={sortBy}
          onView={onView}
        />
      ))}
    </div>
  );
};

export default FeedbackList;
