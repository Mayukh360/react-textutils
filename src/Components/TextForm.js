import React, { useState } from "react";

export default function TextForm(props) {
    const [enterText, setenterText] = useState('')
    const HandleUpClick = () => {

        let upperText = enterText.toUpperCase()
        setenterText(upperText)
    }
    const HandleLowClick = () => {

        let lowerText = enterText.toLowerCase()
        setenterText(lowerText)
    }
    const changeHandle = (event) => {
        setenterText(event.target.value);

    }
    const wordLength=enterText.split(" ").length;
    return (<div>
        <div className="container">
            <h2>{props.headings}</h2>
            <div className="mb-3">

                <textarea
                    className="form-control"
                    value={enterText}
                    onChange={changeHandle}
                    id="myBox"
                    rows="8"
                ></textarea>
            </div>
            <button className="btn btn-primary col-3 mx-2" onClick={HandleUpClick}>Convert To Uppercase</button>
            <button className="btn btn-primary col-3 mx-2" onClick={HandleLowClick}>Convert To Lowerrcase</button>
        </div>
        <div className="container my-3">
        <h2>Summary Of Text</h2>
        <p>{wordLength }words and {enterText.length} Characters</p>
        <p>Time Needed to read the Passage: {wordLength*0.008} Minutes </p>
        <h2></h2>
        <p>{enterText}</p>
      </div>
        </div>
    );
}
