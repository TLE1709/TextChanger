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
        document.getSelection().removeAllRanges();
        props.showAlert("Text Copied","success");
    }

    return (
        <>
<div >
  <h1>{props.heading}</h1>
  <div className="mb-3">
  <textarea value={text} onChange={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleClick}>Convert To UpperCase</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert To LowerCase</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
  <button disabled={text.length===0} type="button" className="btn btn-primary my-1" onClick={handleCopy}>Copy to Clipboard</button>
</div>

<div className="container my-4">
    <h3>Your Summary</h3>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p> {(0.008*text.length)} seconds to read</p>
    <p>{text.length===0?"Nothing to Preview":text}</p>

</div>
    </>
    );

}


export default TextArea;