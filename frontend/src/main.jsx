import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'
import { ChakraProvider } from "@chakra-ui/react";
import ChatProvider from "./Context/ChatProvider";


createRoot(document.getElementById("root")).render(
 
    <BrowserRouter>
      <ChakraProvider>
        <ChatProvider>
          <App />
        </ChatProvider>
      </ChakraProvider>
    </BrowserRouter>
);
