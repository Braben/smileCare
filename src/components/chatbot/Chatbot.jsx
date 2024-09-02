import { useState } from "react";

function Chatbot() {
  const [showChatbot, setShowChatbot] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [chatLog, setChatLog] = useState([]);

  const handleChatButton = () => {
    setShowChatbot(!showChatbot);
  };

  const handleUserInput = (event) => {
    setUserInput(event.target.value);
  };

  const handleSendMessage = () => {
    const response = generateResponse(userInput);
    setChatLog((prevLog) => [...prevLog, { user: userInput, bot: response }]);
    setUserInput("");
  };

  const generateResponse = (input) => {
    // Simple if-else statement for demo purposes
    if (input.includes("hello")) {
      return (
        <p className="ml-5"> Hi, welcome to smileCare, how can I help you?</p>
      );
    } else if (input.includes("goodbye")) {
      return "Goodbye, have a great day!";
    } else {
      return (
        <div>
          <p>I do not understand, kindly book appointment </p>{" "}
          {<button className="btn btn-success">Book appointment</button>}
        </div>
      );
    }
  };

  return (
    <div className="bg-success">
      {showChatbot && (
        <div className="position-fixed bottom-0 end-0 p-3">
          <div className="card" style={{ width: "300px" }}>
            <div className="card-header bg-success text-white d-flex justify-content-between">
              <h5>Chatbot</h5>
              <button
                onClick={handleChatButton}
                style={{ background: "", color: "white" }}
                className="btn-close text-white"
              ></button>
            </div>
            <div className="card-body">
              <div
                className="chat-messages overflow-auto"
                style={{ height: "200px" }}
              >
                {chatLog.map((entry, index) => (
                  <p key={index}>
                    <span style={{ color: "blue" }}>{entry.user}</span>
                    <span style={{ color: "green" }}>{entry.bot}</span>
                  </p>
                ))}
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name=""
                  id=""
                  className="form-control"
                  placeholder="Type message here..."
                  value={userInput}
                  onChange={handleUserInput}
                />
                <button className="btn btn-success" onClick={handleSendMessage}>
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chatbot;
