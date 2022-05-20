import React, { useState } from "react";
import {myAnswersArray} from "./MyAnswers.js"
function DropDownMenu(){
  
  const [answer, setAnswer]= useState("THE WORLD'S SMARTEST BOSS")
  const [question, setQuestion]=useState("")

function findAnswer(questionToFind){
const answerToMatch = myAnswersArray.find(({question})=> questionToFind == question).answer
setAnswer(answerToMatch)
setQuestion(questionToFind)
}


const options = myAnswersArray.map(({question}) => ( 
<option>{question}</option>))
  return (
    <div>
      <select className="col-12" onChange={(e)=>{findAnswer(e.target.value)}}>
        {options}
      </select>
      <div className="card">
        <div className="card-body">
        <h5 class="card-title">{question}</h5>
        <p class="card-text">{answer}</p>
        </div>
      </div>
    </div>
  );
  
}


export default DropDownMenu