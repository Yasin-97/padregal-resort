import React from "react";

export default function Banner({ children, title, subtitle }) {
  return (
    <div className="banner">
          <h1 className="title">{title}</h1>
      <div></div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
}
