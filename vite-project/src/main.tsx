import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PropsPage from "./pages/PropsPage";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <PropsPage />
    </StrictMode>,
);
