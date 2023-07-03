// import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import React,{useState} from 'react';
import Alert from "./components/Alert";
// import About from "./components/About";


function App() {

  const [darkMode,setDarkMode]=useState(false);
  const [alert,setAlert]=useState(null);

  const showAlert=(message,type)=>{

    setAlert({
      msg:message,
      type:type
    });

    setTimeout(()=>{setAlert(null)},1500);
  }
  function toggleMode(){
    setDarkMode(!darkMode);

  
  }

  return (
   
    <>
<NavBar title="TextChanger" aboutText="About Us" Mode={darkMode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className='container my-3'>

            
          <TextForm heading="Enter Text To Modify" Mode={darkMode} showAlert={showAlert}/>
          


</div>
</>

  );
}

export default App;
