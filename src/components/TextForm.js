import React,{useState} from 'react';


function TextArea(props){
    
    const [text,setText]=useState("");
    
    function handleChange(e){
        var changingText=e.target.value;
        setText(changingText);
    }

    function handleClick(e){
        
        var upText=text.toUpperCase();
        setText(upText);
        props.showAlert("Converted to Upper Case","success");
    }

    function handleLoClick(e){
        var loText=text.toLowerCase();
        setText(loText);
        props.showAlert("Converted to Lower Case","success");
    }

    function handleClearClick(){
        var tt=' ';
        setText(tt);
        props.showAlert("Text Cleared","success");
    }

    function handleCopy(){
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied","success");
    }

    return (
        <>
<div >
  <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea value={text} onChange={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <button type="button" className="btn btn-primary mx-1" onClick={handleClick}>Convert To UpperCase</button>
  <button type="button" className="btn btn-primary mx-1" onClick={handleLoClick}>Convert To LowerCase</button>
  <button type="button" className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
  <button type="button" className="btn btn-primary" onClick={handleCopy}>Copy to Clipboard</button>
</div>

<div className="container my-4">
    <h3>Your Summary</h3>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p> {(0.008*text.length)} seconds to read</p>
    <p>{text}</p>

</div>
    </>
    );

}


export default TextArea;