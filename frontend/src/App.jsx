import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Homepages from "./pages/Homepages";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepages />} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  );
}

export default App;
