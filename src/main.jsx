import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Profile from "./profile.jsx";
import Header from "./header.jsx";
import Button from "./button.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Header title={"Web Developer"} />
    <Profile
      name={"Manish Chaudhari"}
      age={31}
      bio={
        "Hi I'm currently learning to design and build a web application using React."
      }
    />
    <Button label={"Conect!"} />
  </React.StrictMode>
);
