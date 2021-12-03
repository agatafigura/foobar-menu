import React from "react";
import Header from "./Header";
import Main from "./Main";
import PopUp from "./PopUp";

export default function App() {
    return (
      <>
      <div className="App">
        <Header/>
        <Main/>
      </div>
      <PopUp/>
      </>
    );
  }
  