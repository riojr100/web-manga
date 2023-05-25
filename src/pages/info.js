import React from "react";
import Header from "../component/header";

export default function info() {
  return (
    <React.StrictMode>
      <Header />
      <div className="container">
        {/* Content */}
        <p>Hello World!</p>
      </div>
    </React.StrictMode>
  );
}
