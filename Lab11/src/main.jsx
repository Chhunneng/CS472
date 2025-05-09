import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BookProvider } from "./Contexts/BookContext.jsx";
import { HashRouter } from 'react-router';

createRoot(document.getElementById("root")).render(
    <BookProvider>
        <HashRouter>
            <App />
        </HashRouter>
    </BookProvider>
);
