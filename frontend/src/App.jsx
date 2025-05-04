import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! I’m Advisor. Ask me anything about Indian law." }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Mock bot response
    const botResponse = {
      role: "bot",
      text: "Thanks for your question. (This is a placeholder response while we set up the backend.)"
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, botResponse]);
    }, 500);

    setInput("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-4">
        <h1 className="text-2xl font-bold mb-4 text-blue-700">Advisor – Indian Legal Assistant</h1>
        
        <div className="space-y-3 h-96 overflow-y-auto border p-3 rounded bg-gray-50 mb-4">
          {messages.map((msg, index) => (
            <div key={index} className={`text-sm ${msg.role === "user" ? "text-right" : "text-left"}`}>
              <p className={`inline-block px-3 py-2 rounded-xl ${msg.role === "user" ? "bg-blue-200" : "bg-green-100"}`}>
                {msg.text}
              </p>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            className="flex-1 border px-4 py-2 rounded"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a legal question..."
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={handleSend}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
