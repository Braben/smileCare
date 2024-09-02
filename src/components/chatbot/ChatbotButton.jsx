import { useState } from "react";
import Chatbot from "./Chatbot";
import "./chatbotButton-style.css";

const ChatbotButton = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const handleChatButton = () => {
    setShowChatbot(!showChatbot);
  };
  return (
    <div className="container posrel">
      <div className="chatbotContainer ">
        <button
          type="button"
          onClick={handleChatButton}
          className="btn btn-primary position-fixed zindex-fixed"
        >
          Chat
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            99+
            <span className="visually-hidden">unread messages</span>
          </span>
        </button>
        {showChatbot && <Chatbot />}
      </div>
    </div>
  );
};

export default ChatbotButton;
