import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ComponentA } from "./ComponentA.jsx";

import App from "./App.jsx";
import { TimerOne } from "./Timer/TimerOne.jsx";
import { TimerTwo } from "./Timer/TimerTwo.jsx";

createRoot(document.getElementById("root")).render(<App />);
