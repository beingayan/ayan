import React, { useState } from 'react'
import './Calc.css'

export const Calculator = () => {

    let [val, setVal] = useState('');


    function result(event) {


        setVal(val.concat(event.target.value));
        console.log(val)

    }


    function clear() {

        setVal(" ");
    }

    function evaluate() {

        setVal(eval(val).toString());
    }

    return (

        <>
            <h1> Calculator</h1>

            <div className='calc'>

                <input type="text" id='screen' value={val} /> <br />
                <input type="button" onClick={result} value='9' className='button' />
                <input type="button" onClick={result} value='8' className='button' />
                <input type="button" onClick={result} value='7' className='button' />
                <input type="button" onClick={result} value='6' className='button' /> <br />
                <input type="button" onClick={result} value='5' className='button' />
                <input type="button" onClick={result} value='4' className='button' />
                <input type="button" onClick={result} value='3' className='button' />
                <input type="button" onClick={result} value='2' className='button' /> <br />
                <input type="button" onClick={result} value='1' className='button' />
                <input type="button" onClick={result} value='0' className='button' />
                <input type="button" onClick={result} value='.' className='button' />
                <input type="button" onClick={result} value='+' className='button' /> <br />
                <input type="button" onClick={result} value='-' className='button' />
                <input type="button" onClick={result} value='*' className='button' />
                <input type="button" onClick={result} value='/' className='button' />
                <input type="button" onClick={result} value='%' className='button' /> <br />
                <input type="button" value='clear' onClick={clear} className='bg-btn' />
                <input type="button" value='=' onClick={evaluate} className='bg-btn' />

            </div>


        </>
    )

}

export default Calculator