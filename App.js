
import './App.css';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React,{useState} from 'react';

function App() {
  const[mode,setMode] = useState('light');
  const[alert , setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>{
      setAlert(null);
    },1500);
  }
  const toggleMode = ()=>{
if (mode === 'light' ){
  setMode ('dark');
  document.body.style.backgroundColor = '#615bd2';
  showAlert("Dark mode has been enabled" , "success")
}
else{
  setMode('light');
  document.body.style.backgroundColor = 'white';
  showAlert("Light mode has been enabled" , "success")
}
  }
  return (
    <>
   <Navbar title = " textEditor " mode={mode} toggleMode = {toggleMode} />
   <Alert alert={alert}/>
   <div className="container my-3">
    <TextForm showAlert={showAlert} heading = " Ente the text " mode={mode}/>
  
   
   </div>


   
  </>
  );
}

export default App;