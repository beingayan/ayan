import React, { useState } from 'react'
import '../App.css'



export const Text = () => {


    function toUppercase() {
        let convertingText = normalText.toUpperCase();
        setText(convertingText)
    }
    function tolowercase() {
        let convertingText = normalText.toLowerCase();
        setText(convertingText)
    }
    function clear() {
        let clearText = "";
        setText(clearText)
    }
    function getText(event) {
        setText(event.target.value)
    }
    let [normalText, setText] = useState("")

    let words = "";
    let chars = "";

    words = normalText.replace(/(^\s*)|(\s*$)/gi, "");
    words = words.replace(/[ ]{2,}/gi, " ");
    words = words.replace(/\n /, "\n");
    words = words.split(" ").length;
    chars = normalText.replace(/ /g, "");

    let [newStyle, setColor] = useState({
        color: "black"

    });
    let [btnText, setBtnText] = useState("light font")

    function color() {
        if (newStyle.color === "black") {
            setColor({
                color: "teal",
                border: "9px solid teal"
            })
            setBtnText("light font")
        } else {
            setColor({
                color: "black"

            })
            setBtnText("dark text")
        }

    }

    let [currAlert, setAlert] = useState('hello world is successfull');



    function alert() {

        currAlert = setAlert("button is clicked")

        if (currAlert === setAlert("button is clicked")) {

            currAlert = setAlert("you are clicking again")
        }

    }



    return (
        <div classNameNameName='flexing'>
            <div className="form-floating">
                <h1>Number of characters : {chars.length} Number of words is : {words}</h1>
                <p></p>
                <textarea placeholder="enter the text" id="floatingTextarea" rows="8" onChange={getText} value={normalText} style={newStyle}></textarea>

                <button type="button" className="btn btn-primary left" onClick={tolowercase}>lowercase</button>
                <button type="button" className="btn btn-primary middle" onClick={clear}>clear</button>
                <button type="button" className="btn btn-primary middle-2" onClick={color} > {btnText}</button>
                <button type="button" className="btn btn-primary right" onClick={toUppercase}>uppercase</button>
                <button type="button" className="btn btn-primary right" onClick={alert}>{currAlert}</button>



            </div>
        </div>
    )
}
