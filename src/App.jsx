import React, { useState } from 'react'
import Questions from './Questions.json';

const App = () => {
let [QIndex, stQIndex]= useState(0)
let [selectedindex, setselectedinex]= useState(null)
let [start, setstart]= useState(0)

const startquiz= () =>{
  setstart(start+1)
}

const next= () =>{
  setselectedinex(null)
  stQIndex(QIndex+1)
  
}
const restart= ()=>{
  stQIndex(0)
}

const selectedoption= (selectedindex)=>{
  setselectedinex(selectedindex)
}

if(start===0){
return(
  
  <div className="card text-center">
  <div className="card-header">
    By Sheraz Sheikh
  </div>
  <div className="card-body">
    <h5 className="card-title">wellcome to online quizz</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
  
    <button onClick={startquiz} type="button" class="btn btn-success">Start Quizz</button>
   <div>
  <button type="button" className="btn btn-danger mt-2">Add to Quizz</button>
</div>
<div>
  <button type="button" className="btn btn-warning mt-2">View Quizz</button>
</div>

  </div>
  <div className="card-footer text-body-secondary">
    Copyright@gmail.com
  </div>
</div>

)
}

if(QIndex=== Questions.length){
  return(
    <>
    <div className="card text-center">
  <div className="card-header">
    Featured
  </div>
  <div className="card-body">
    <h5 className="card-title">Your Quiz is ended</h5>
    <p className="card-text">If you want tp start quiz again then press the the button below</p>
    <button onClick={restart} type="button" class="btn btn-success">RESTART</button>
  </div>
  <div className="card-footer text-body-secondary">
    THANK YOU
  </div>
</div>

    </>
  )
}

  return (
    <div >
      <nav className="navbar bg-body-tertiary"  >
  <div className="container-fluid" style={{backgroundColor: "black"} }>
    <a className="navbar-brand" style={{color: "white"}}>ONLINE QUIZ</a>
    <h2 style={{color: "white"}}>{QIndex+1}/{Questions.length}</h2>
    <form className="d-flex" role="search">
      {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
      <button className="btn btn-outline-success" type="submit">SUBMIT</button>
    </form>
  </div>
</nav>

<div className="card ">
  <div className="card-header">  <h3>{Questions[QIndex].statemnt}</h3> </div>

  <ul className="list-group list-group-flush ">
    {Questions[QIndex].options.map((option, index)=>(
    <li style={{cursor: "pointer"}}
    className={ selectedindex ===index  ?    "list-group-item active"  :"list-group-item"}
     onClick={()=> selectedoption(index)}
      key={index}
      
      > {option}</li>
    ))}
    
  </ul>
       
</div>

<button disabled={selectedindex===null} className=" mt-5 btn btn-success" style={{marginLeft:50}} onClick={next}>Next Question</button>

</div>

    
  )
}

export default App