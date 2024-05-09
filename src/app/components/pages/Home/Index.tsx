import React from "react"
import './styleIndex.css'
import PrimaryButton from "../../atoms/primarybutton/PrimaryButton";
import SecondButton from "../../atoms/secondbutton/SecondButton";

const Index = () => {
  return (
    <div className="bg">
      <div className="text">
        <img src="https://s3-sa-east-1.amazonaws.com/recrutai-dev/0f836d70-7fd0-11ed-b501-a1c621087a4a/07e013e0-9081-11ed-8035-bbb08d3cbf12/logo/07e013e0-9081-11ed-8035-bbb08d3cbf12_1674741385441_54w.png" alt="" />
        <h1>Sistema de rastreamento de status de websites</h1>
      </div>
      <div className="buttons">
        <PrimaryButton
          label='Login'
        />

        <SecondButton
          label="Register"
        />
      
      </div>
    </div>
  );
}

export default Index;