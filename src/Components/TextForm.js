import React,{useState} from "react";

export default function TextForm(props) {
    const[enterText, setenterText]=useState('')
    const HandleUpClick=()=>{
       
        let upperText=enterText.toUpperCase()
        setenterText(upperText)
    }
    const changeHandle=(event)=>{
        setenterText(event.target.value);
       
    }
    return (
        <div>
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
            <button className="btn btn-primary" onClick={HandleUpClick}>Convert To Uppercase</button>
        </div>
    );
}
