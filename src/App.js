import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [mode , setMode] = useState('light') //whether dark mode is enable or not
  const [alert , setAlert] = useState(null)

  const showAlert = (message , type)=>{
    setAlert({
      msg : message ,
      type :type
    })

    setTimeout(() =>{
      setAlert(null)
    },1500)
  }

  const toggleMode = ()=>{
    console.log("toggle function is called")
    if(mode ==='light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode has been enabled", "success")
      document.title = "TextUtils - Dark Mode"

      // setInterval(()=>{
      //   document.title = "TextUtils is Amazing"
      // },2000)
      // setInterval(()=>{
      //   document.title = "Install TextUtils now"
      // },1500)

    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled", "success")
      document.title = "TextUtils - Light Mode"
    }
  }
  return (
   <>
   {/* <BrowserRouter> */}
   <Navbar title='TextUtils' aboutText='About us' mode={mode} toggleMode={toggleMode}/>
   <Alert alert ={alert}/>
   <div className='container my-2'>
   <TextForm heading='Enter the text to analyze below' showAlert={showAlert} mode={mode}/>
    {/* <Routes>
      <Route path='/' element={<TextForm heading='Enter the text to analyze below' showAlert={showAlert} mode={mode}/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes> */}
   </div>
   {/* </BrowserRouter> */}
   </>
  );
}

export default App;
