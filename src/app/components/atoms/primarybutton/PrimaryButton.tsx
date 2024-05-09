import React from "react"
import './stylePrimaryButton.css'

interface Label {
    label:string;
}

const PrimaryButton = ({label}:Label) => {
  return (
    <a className="link" href="">{label}</a>
  );
}

export default PrimaryButton;