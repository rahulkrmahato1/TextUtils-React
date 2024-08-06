import React, { useState } from 'react'

export default function TextForm(props) {

    const [text , setText] = useState("") // hook
    // text = 'new Text'  Wrong way to change the state
    // setText('new Text') Correct way to change the state

    const handleOnChange = (event)=>{
     setText(event.target.value)
    }

    const handleUpClick = ()=>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to UpperCase!" , "success")
       }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to LowerCase!" , "success")
       }
       const handleClearClick = ()=>{
        setText('')
        props.showAlert("Text Cleared!" , "success")
       } 
       const handleExtraSpace = ()=>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Extra space removed!" , "success")
       } 
       const handleCopyText = ()=>{
        var text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Text Copied to Clipboard!" , "success")
       }   
  return (
    <>
    <div className='container' style={{color : props.mode==='dark' ? 'white' :'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" style={{background : props.mode==='dark' ? 'grey' :'white',color : props.mode==='dark' ? 'white' :'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoClick}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearClick}>Clear Text</button>
        <button className='btn btn-primary mx-2' onClick={handleExtraSpace}>Remove extra space</button>
        <button className='btn btn-primary mx-2' onClick={handleCopyText}>Copy Text</button>
    </div>
    <div className='container' style={{color : props.mode==='dark' ? 'white' :'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
