import React, {useState} from 'react'
//usestate called Hooks means without use of class we can use it under fun component


export default function TextForm(props) {

  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();//it convert input text to Upper case
    setText(newText); //Correct way to change the state(write)
    props.showAlert("Converted to UpperCase","Success");
  }

  const handleLoClick = ()=>{
    let newText = text.toLowerCase();           //it convert input text to Lower case
    setText(newText);                           //Correct way to change the state(write)
    props.showAlert("Converted to LowerCase","Success");
  }
  const handleClearClick = ()=>{
    let newText = " ";                          //it convert input text to Upper case
    setText(newText); 
    props.showAlert("Text Cleared","Success");                         
  }
                                              
  const handleonchange = (event)=>{            //to write onchange  //console.log("on change");                                          
    setText(event.target.value)
  }

  const handleExtraSpaces = (event)=>{ 
    let newText= text.split(/[ ]+/);                                                  
    setText(newText.join(" "))
    props.showAlert("Removed Extra space","Success");
  }

  const handleCopy = ()=>{ 
    console.log("copied");                                                     
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied","Success");
  }
                                            
  const [text, setText] = useState("");    //array destructuring method
  return (                                   //1.Used concept of state to chenge content without reloading
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonchange} id="myBox" rows='8'></textarea>
        </div>
        <button className="btn btn-outline-primary mx-1"  onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-outline-primary mx-1"  onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-outline-primary mx-1"  onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-outline-primary mx-1"  onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-outline-primary mx-1"  onClick={handleExtraSpaces}>Remove Extra spaces</button>
        
    </div>
    <div className= "container my-3">
      <h1> Your text summary</h1>
      <p>{text.split ("").length } words and {text.length} charactors</p> 
      <p>{0.008 * text.split (" ").length } minutes read </p>
      <h2> preview</h2>
      <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
      </div>
      </>
  )
}
