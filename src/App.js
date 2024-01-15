//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { Route, Routes } from "react-router";
import {
  BrowserRouter as Router
   
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type: type
    })

    setTimeout( () =>{
      setAlert(null);
    },2000);

  }


  const removeBodyClasses = () =>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-success');
  }

  const toggleMode = (cls) =>{
    removeBodyClasses();
    console.log(cls);
    document.body.classList.add('bg-'+ cls);
    if(mode=== 'light'){
       setMode("dark");
       document.body.style.backgroundColor = "#042743";
       showAlert("dark mode has been enabled","success");
       document.title = "TextUtil-Dark Mode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled","success");
      document.title = "TextUtil-Light Mode";
    }
  }

  const changeMode = () =>{
    if(mode=== 'light'){
      setMode("dark");
       document.body.style.backgroundColor = "#20c997";
       showAlert("green mode has been enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been enabled","success");
    }
  }

  return (
   <>
      <Router>
      <Navbar title ="text_Utils" abouttext ="About" mode={mode} toggleMode={toggleMode} changeMode={changeMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">

      <Routes>
        
          <Route exact path="/about" element={<About/>}/>
              
          
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Try TextUtil , uppercase to lowercase" mode={mode}/>}/>
              
          
        
      </Routes>
       
        
      </div>
      </Router>

   </>
  );
}

export default App;
