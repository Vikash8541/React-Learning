import React, { useEffect, useState } from 'react';
import { useActionState } from 'react';

const FeedbackForm = () => {
  const [toast, setToast] = useState(null);

  // Handle Form Submission
  const handleSubmit = async (previousData, formData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    await new Promise((res) => setTimeout(res, 1000)); // simulate delay

    if (name && email && message) {
      const newEntry = { name, email, message };
      return {
        success: true,
        submitted: newEntry,
        history: [...(previousData?.history || []), newEntry],
      };
    } else {
      return {
        success: false,
        error: "All fields are required.",
        history: previousData?.history || [],
      };
    }
  };

  const [data, action, pending] = useActionState(handleSubmit, { history: [] });

  useEffect(() => {
    if (data?.success) {
      setToast("✅ Feedback submitted!");
    } else if (data?.error) {
      setToast("❌ " + data.error);
    }

    const timer = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(timer);
  }, [data]);

  return (
    <div className="min-h-screen bg-[#f9f9f9] flex items-center justify-center px-4 py-10 font-sans">
      {/* Feedback Form Card */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 w-full max-w-xl p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6 flex items-center justify-center gap-2">
          📝 Submit Your Feedback
        </h2>

        <form action={action} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring focus:ring-neutral-300 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring focus:ring-neutral-300 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Feedback</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Write your thoughts..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:ring focus:ring-neutral-300 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={pending}
            className={`w-full py-3 rounded-lg font-medium text-white transition ${
              pending
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-neutral-800 hover:bg-neutral-700'
            }`}
          >
            {pending ? 'Sending...' : 'Send Feedback'}
          </button>
        </form>
      </div>

      {/* Submission History */}
      {data?.history?.length > 0 && (
        <div className="mt-10 w-full max-w-xl bg-white border border-gray-200 rounded-xl shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            📄 Submission History
          </h3>
          <div className="space-y-4">
            {data.history.map((entry, index) => (
              <div
                key={index}
                className="bg-gray-50 p-4 rounded-md border border-gray-200 text-sm text-gray-700"
              >
                <p className="mb-1">
                  <strong>👤 Name:</strong> {entry.name}
                </p>
                <p className="mb-1">
                  <strong>📧 Email:</strong> {entry.email}
                </p>
                <p>
                  <strong>💬 Feedback:</strong> {entry.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Toast Message */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-neutral-800 text-white px-6 py-3 rounded-lg shadow-xl animate-fade-in">
          {toast}
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
