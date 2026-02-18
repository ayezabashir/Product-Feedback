import { useLocation, useNavigate, useParams } from "react-router-dom";
import DetailView from "../components/DetailView";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo } from "react";
import {
  addComment,
  deleteSuggestion,
  toggleUpvote,
  updateSuggestion,
} from "../store/feedbackSlice";
import FeedbackModalBox from "../components/FeedbackModalBox";

const DetailsPage = () => {
  const { id } = useParams();
  const suggestionId = Number(id);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const suggestions = useSelector((state) => state.feedback.suggestions);
  const comments = useSelector((state) => state.feedback.comments);

  const feedback = useMemo(() => {
    return suggestions.find((suggestion) => suggestion.id === suggestionId);
  }, [suggestions, suggestionId]);

  useEffect(() => {
    if (!feedback) {
      navigate("/");
      return null;
    }
  }, [feedback, navigate]);
  if (!feedback) {
    return null;
  }

  const isEditRoute = location.pathname.endsWith("/edit");
  const closeModal = () => navigate(-1);
  const handleUpvote = () => dispatch(toggleUpvote(feedback.id));
  const handleAddComment = (suggestionId, comment) => {
    dispatch(addComment({ suggestionId, comment }));
  };
  const handleUpdate = (payload) => {
    dispatch(updateSuggestion(payload));
    closeModal();
  };

  const handleDelete = (id) => {
    dispatch(deleteSuggestion(id));
    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <DetailView
        feedback={feedback}
        comments={comments[feedback.id] || []}
        onBack={() => navigate("/")}
        onUpvote={handleUpvote}
        onOpenEdit={() => navigate(`/feedback/${feedback.id}/edit`)}
        onAddComment={handleAddComment}
      />
      <FeedbackModalBox
        isOpen={isEditRoute}
        onClose={closeModal}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        editingFeedback={isEditRoute ? feedback : null}
      />
    </div>
  );
};

export default DetailsPage;
