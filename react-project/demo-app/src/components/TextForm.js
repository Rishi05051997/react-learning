import React, { useState } from 'react'
import "./../App.css";

export default function TextForm(props) {
    const [text, setText] = useState('');
    // const [uppercase, setUpperCase] = useState('');
    
    let onTextAreaHandler = (e) => {
        // console.log(e.target.value);
        let inputVal = e.target.value;
        setText(inputVal);
    }
    let convertToUppercaseHandler = () => {
        let upperCase = text.toUpperCase();
        setText(upperCase);
    }
    let convertToLowercaseHandler = () => {
        let upperCase = text.toLowerCase();
        setText(upperCase);
    }

    let convertToDark = () => {
        document.body.style.backgroundColor = 'black';
    }
    return (
        <>
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">

                <textarea className="form-control" id="myBox" value={text} rows="8" onChange={onTextAreaHandler}></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={convertToUppercaseHandler}>Convert to Uppercase</button>

            <button className="btn btn-primary mx-2" onClick={convertToLowercaseHandler}>Convert to Lowercase</button>
            {/* <button className="btn btn-primary" onClick={convertToDark}>Dark Mode</button>
            <input type="checkbox" onChange={convertToDark} /> */}
            {/* <p className={!text?'red':'green'}>
                {
                    !text?'No Text for text':text
                }
            </p> */}
        </div>
        <div className="container">
            <h1>Your text Summery</h1>
            <p>{text.split(" ").length-1} words, {text.length} characters</p>
            <p>{0.008*(text.split(" ").length-1)} Minutes to read</p>
            <h2>Priview</h2>
            <p className={!text?'red':'green'}>
                {
                    !text?'No Text for text':text
                }
            </p>
        </div>
        </>
    )
}
