import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ChatWindow from "./components/ChatWindow";
import HistoryPage from "./Pages/HistoryPage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <nav>
          <Link to="/">Chat with AI</Link>
          <Link to="/history">Past Conversations</Link>
        </nav>

        <Routes>
          <Route path="/" element={<ChatWindow />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
