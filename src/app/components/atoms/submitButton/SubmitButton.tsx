import React from "react"
import './styleSubmitButton.css'

interface Label {
    label:string;
}

const SubmitButton = ({label}:Label) => {
  return (
    <input className="submit" type="submit" value={label} />
  );
}

export default SubmitButton;