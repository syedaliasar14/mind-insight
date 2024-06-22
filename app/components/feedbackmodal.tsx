import { useState } from "react";

type FeedbackModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const FeedbackModal = ({ isOpen, onClose }: FeedbackModalProps) => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async () => {
    if (!feedback) return;

    const apiEndpoint = 'https://41ltx6s3mh.execute-api.us-east-1.amazonaws.com/feedbackForm';

    try {
      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: feedback }),
      });

      if (response.ok) {
        console.log('Feedback submitted successfully');
        onClose();
      } else {
        console.error('Failed to submit feedback');
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex relative flex-col justify-center bg-white p-8 mx-8 max-w-lg w-full">
        <h2 className="text-lg text-gray-600 mb-2 self-start">How can we improve?</h2>
        <textarea
          className="w-full h-40 p-2 border border-gray-300 focus:outline-none text-gray-700"
          placeholder="Enter your feedback here..."
          onChange={(e) => setFeedback(e.target.value)}
        ></textarea>
        <div className="flex justify-end mt-4">
          <button
            className="text-gray-400 font-medium py-1 px-4 rounded-full mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-gradient-to-br from-fav-blue1 to-fav-blue2 w-max text-white py-1 px-4 rounded-full"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackModal;
