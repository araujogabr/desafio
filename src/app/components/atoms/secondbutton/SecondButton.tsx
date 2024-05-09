import React from "react"
import './styleSecondButton.css'

interface Label {
    label:string;
}

const SecondButton = ({label}:Label) => {
  return (
    <a className="linkSecond" href="">{label}</a>
  );
}

export default SecondButton;