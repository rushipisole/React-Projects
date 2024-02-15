import React, { useState } from "react";

export default function Form(props) {

    const onClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const onClickLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter Text 2")
    return (
        <>

            <div className="container my-3" style={{ textAlign: "center" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" />
                </div>
                <button className="btn btn-primary mx-3" onClick={onClick}> Convert</button>
                <button className="btn btn-primary mx-3" onClick={onClickLower}> Convert 2</button>
            </div>

            <div className="container my-3" style={{ textAlign: "center" }}>
                <h2>Text Summary</h2>
                <p> {text.split(" ").length}words and {text.length} character </p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>



        </>
    )
}