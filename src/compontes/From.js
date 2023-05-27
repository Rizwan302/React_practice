import React, {useState} from 'react'


export default function From(props) {

    const chenge = ()=>{
        console.log("Ok"+ mytext)
        let text = mytext.toUpperCase();
        console.log(text)
        settext(text)
    }
    
    const chengeValue = (events) => {
        // console.log("Chenge")
        settext(events.target.value)
    }
    const colorchenge = ()=>{
        // const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        const rndCol = 'green'
        document.getElementById('box').style.backgroundColor = rndCol
    }

    const [mytext, settext] = useState("Enter the Name");
  return (
    <>
    <h1>{props.hending}</h1>
    <form className="row g-3">
  <textarea name="" id="box" cols="30" value={mytext} onChange={chengeValue} rows="10">Enter</textarea>
  <div className="col-12">
    <button type="submit" onClick={chenge} className="btn btn-primary">Sign in</button>
  </div>
  <div className="col-12">
    <button type="submit" onClick={colorchenge} className="btn btn-primary">Color Chenge</button>
  </div>
</form>

<div className="cont">
    <h1>Count The World and letter</h1>
    <p>Total Word: {mytext.split(" ").length}</p>
    <p>Total charchters {mytext.length}</p>
    <p>{1/125 * mytext.split(" ").length}</p>
</div>
</>
  )
}
