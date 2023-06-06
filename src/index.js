import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./app.scss";
import { createRoot } from "react-dom";

const el = document.getElementById("app");


const root = createRoot(el)
root.render(<App />);
