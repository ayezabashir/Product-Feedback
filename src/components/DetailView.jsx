import { ArrowLeft, ChevronUp, MessageSquare } from "lucide-react";

const DetailView = () => {
  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <button className="cursor-pointer flex items-center gap-2 text-gray-600 hover:text-gray-800 font-semibold">
          <ArrowLeft />
          Go Back
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all">
          Edit Feedback
        </button>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-md">
        <div className="flex items-start gap-6">
          <button
            className={`flex flex-col items-center gap-1 rounded-lg px-3 py-2 transition-all`}
          >
            <ChevronUp size={16} />
          </button>
          <div className="flex-1">
            <h2 className="font-bold text-gray-800 text-xl mb-2">
              Feedback Title
            </h2>
            <p className="text-gray-300 mb-3">Feedback description</p>
            <span className="inline-block bg-blue-50 hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-semibold">
              Feedback Category
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="text-gray-400" size={18} />
            <span className="font-bold text-gray-800">Feedback Comments</span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl p-6">
        <h3 className="font-bold text-gray-800 text-lg mb-6">Comment Length</h3>
        <div className="space-y-6">
          <div className="flex gap-4">
            <img src="" alt="" className="w-10 h-10 rounded-full" />
            <div className="flex-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h4 className="font-bold text-gray-800 text-sm">
                    Comment Name
                  </h4>
                  <p className="text-gray-600 text-sm">Comment User Name</p>
                </div>
                <button className="text-blue-600 font-semibold text-sm hover:underline">
                  Reply
                </button>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Comment Text
              </p>
            </div>
          </div>
          <div className="border-b border-gray-100 mt-6"></div>
        </div>
      </div>
      <div className="bg-white rounded-xl mt-6">
        <h3 className="font-bold">Add Comment</h3>
        <textarea
          className="w-full border border-gray-200 rounded-lg p-4 text-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
          rows="4"
          maxLength={250}
        />
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-500 text-sm">Characters Left</span>
          <button className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg font-semibold transition-all">
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
