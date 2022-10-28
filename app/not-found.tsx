import React from "react";

export default function NotFound() {
  return (
    <div className="page">
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "5em",
          paddingBottom: "5em",
        }}
      >
        <h1>Page not found.</h1>
        <p>Something went wrong here.</p>
      </div>
    </div>
  );
}
