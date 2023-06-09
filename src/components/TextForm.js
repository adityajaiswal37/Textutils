import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick=()=>{
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLoClick=()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange=(event)=>{
    setText(event.target.value); 
  }
  const [text, setText] = useState("");
  
  return (
    <>
    <div className="Container">
      <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" placeholder='Enter text here' value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <div className="Button-conatainer">
          <button className="btn btn primary mx-3" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn primary mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
        </div>
    </div>
    <div className="Container my-3 ">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length}</p>
      <p>{0.008*text.split(" ").length}</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
