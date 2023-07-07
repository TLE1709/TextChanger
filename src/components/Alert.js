import React from "react";

function Alert(props){

    const Ctext=(word)=>{
     
        let nWord=word.toLowerCase();
        return nWord.charAt(0).toUpperCase()+nWord.slice(1);
    
    }
return (
props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
  <strong>{Ctext(props.alert.type)} : {props.alert.msg}</strong>
</div>
);
}

export default Alert;