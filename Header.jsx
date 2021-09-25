import React from "react";

export default function Header(props) {
  return (
    <div>
      <header className="head">
        <span className="header">SK spicey foods</span>
        <span className="cart">🛒{props.Total}</span>
      </header>
    </div>
  );
}
