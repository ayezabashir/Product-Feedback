import { ArrowLeft, ChevronUp, MessageSquare, X } from "lucide-react";
import { useState } from "react";

const DetailView = ({
  feedback,
  comments,
  onBack,
  onUpvote,
  onOpenEdit,
  onAddComment,
  onAddReply, // New prop for handling replies
}) => {
  const [newComment, setNewComment] = useState("");
  const [replyingTo, setReplyingTo] = useState(null);

  const handlePost = () => {
    if (!newComment.trim()) return;

    if (replyingTo) {
      // Add as reply to specific comment
      const reply = {
        id: Date.now(),
        name: "current user",
        username: "@currentuser",
        avatar: "https://i.pravatar.cc/150?img=70",
        text: newComment,
        date: "just now",
        parentId: replyingTo.id,
        replyingTo: replyingTo.username,
      };
      onAddReply?.(feedback.id, replyingTo.id, reply);
      setReplyingTo(null);
    } else {
      // Add as top-level comment
      const comment = {
        id: Date.now(),
        name: "current user",
        username: "@currentuser",
        avatar: "https://i.pravatar.cc/150?img=70",
        text: newComment,
        date: "just now",
        replies: [],
      };
      onAddComment(feedback.id, comment);
    }
    setNewComment("");
  };

  const handleReplyClick = (comment) => {
    setReplyingTo(comment);
    setTimeout(() => {
      document.querySelector("textarea")?.focus();
    }, 100);
  };

  const cancelReply = () => {
    setReplyingTo(null);
  };

  // Recursive component for nested replies
  const CommentItem = ({ comment, depth = 0 }) => (
    <div className={`${depth > 0 ? "ml-12 mt-4" : ""}`}>
      <div className="flex gap-4">
        <img
          src={comment.avatar}
          alt={comment.name}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="font-bold text-gray-800 text-sm">
                {comment.name}
              </h4>
              <p className="text-gray-600 text-sm">{comment.username}</p>
            </div>
            <button
              onClick={() => handleReplyClick(comment)}
              className="text-blue-600 font-semibold text-sm hover:underline cursor-pointer"
            >
              Reply
            </button>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            {comment.replyingTo && (
              <span className="text-purple-600 font-semibold">
                @{comment.replyingTo}{" "}
              </span>
            )}
            {comment.text}
          </p>
        </div>
      </div>
      {comment.replies?.length > 0 && (
        <div className="space-y-4 mt-4">
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <button
          onClick={onBack}
          className="cursor-pointer flex items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold"
        >
          <ArrowLeft />
          Go Back
        </button>
        <button
          onClick={onOpenEdit}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all cursor-pointer"
        >
          Edit Feedback
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-md">
        <div className="flex items-start gap-6">
          <button
            onClick={onUpvote}
            className={`flex flex-col items-center gap-1 rounded-lg px-3 py-2 transition-all cursor-pointer
              ${feedback.upvoted ? "bg-blue-600 text-white" : "bg-gray-100 hover:bg-blue-100 text-gray-800"}
              `}
          >
            <ChevronUp size={16} />
            <span className="font-bold text-gray-800">{feedback.upvotes}</span>
          </button>
          <div className="flex-1">
            <h2 className="font-bold text-gray-800 text-xl mb-2">
              {feedback.title}
            </h2>
            <p className="text-gray-400 mb-3">{feedback.description}</p>
            <span className="inline-block bg-blue-50 hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-semibold transition-colors">
              {feedback.category}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="text-gray-400" size={18} />
            <span className="font-bold text-gray-800">{feedback.comments}</span>
          </div>
        </div>
      </div>

      {comments && comments.length > 0 && (
        <div className="bg-white rounded-xl p-6">
          <h3 className="font-bold text-gray-800 text-lg mb-6">
            {comments.length} comments
          </h3>
          <div className="space-y-6">
            {comments.map((comment) => (
              <CommentItem key={comment.id} comment={comment} />
            ))}
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl p-6">
        {replyingTo && (
          <div className="mb-3 flex justify-between items-center bg-purple-50 p-3 rounded-lg">
            <span className="text-sm text-purple-600">
              Replying to @{replyingTo.username}
            </span>
            <button
              onClick={cancelReply}
              className="text-gray-500 hover:text-gray-700 transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>
        )}
        <h3 className="font-bold text-gray-800 mb-3">Add Comment</h3>
        <textarea
          className="w-full border border-gray-200 rounded-lg p-4 text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows="4"
          maxLength={250}
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder={replyingTo ? `Reply to ${replyingTo.username}...` : "Share your thoughts..."}
        />
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-500 text-sm">
            {250 - newComment.length} characters left
          </span>
          <button
            disabled={!newComment.trim()}
            onClick={handlePost}
            className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-semibold transition-all cursor-pointer"
          >
            {replyingTo ? "Post Reply" : "Post Comment"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
