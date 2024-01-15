import React ,{useState} from 'react'

 // Declare a new state variable, which we'll call "count"


export default function TextForm(props) {

const [text, setText] = useState("");
//way to change text or state  usestate is a (hook)
//setText("New Text");

const handleUpClick = () =>{
      console.log("text converted to uppercase" + text);
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("converted to uppercase","success");
      
}
const handleLoClick = () =>{
  console.log("text converted to lowercase" + text);
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("converted to lowercase","success");
}
const handleClText = () =>{
  console.log("text is deleted" + text);
  let newText = "";
  setText(newText);
  props.showAlert("text is deleted ","success")
  
}

const handleExtraSpaces = () =>{
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("removed extraspace","success")
}

const handleCopy = () =>{
 // console.log("Text Copied");
 // var text = document.getElementById("myBox");
 // text.select();
  //text.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(text.value);
  //document.getSelection().removeAllRanges();
  props.showAlert("copied to clipboard","success");
}

const handleOnChange = (event) =>{
  console.log("text converted to uppercase");
  setText(event.target.value);
}
  return (
    <>
  
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        
        <textarea className="form-control" id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'#84a1cc':'white', color: props.mode==='dark'?'white':'black'}} onChange={handleOnChange} value={text}></textarea>
        </div>
        <button disabled = {text.length===0}className="btn btn-primary mx-1 my-1" onClick ={handleUpClick}>Convert to Uppercase</button>
        <button disabled = {text.length===0}className="btn btn-primary mx-1 my-1" onClick ={handleLoClick}>Convert to Lowercase</button>
        <button disabled = {text.length===0}className="btn btn-primary mx-1 my-1" onClick ={handleClText}>Clear Text</button>
        <button disabled = {text.length===0}className="btn btn-primary mx-1 my-1" onClick ={handleCopy}>Copy Text</button>
        <button disabled = {text.length===0}className="btn btn-primary mx-1 my-1" onClick ={handleExtraSpaces}>Handle Spaces</button>
    </div>
    <div className="class container my-7 " style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} character</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter your text"}</p>
    </div>
    </>
  )
}
