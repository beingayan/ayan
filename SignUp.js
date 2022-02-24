import axios from 'axios'
import React, { useState } from 'react'
import './SignUp.css'

export const SignUp = () => {
    const [user, setUser] = useState({
        username: "",
        password: "",
        reEnterPassword: ""
    })

    const getValue = e => {
        const { name, value } = e.target;

        setUser({
            ...user,
            [name]: value
        })
    }
    const signUp = () => {
        const { username, password, reEnterPassword } = user

        if (username && password && reEnterPassword && (password === reEnterPassword)) {
            axios.post("http://localhost:8000/signup", user)
                .then((res) => {
                    console.log(res)
                })
        } else {
            alert("invalid input");
        }
    }
    return (
        <>
            <div className="main_div">
                <div className="box">
                    <h1>Sign Up</h1>
                    <div className="inputBox">
                        <input type="text" name='username' required onChange={getValue} value={user.username} />
                        <label htmlFor="username">username</label>
                    </div>
                    <div className="inputBox">
                        <input type="password" name='password' required onChange={getValue} value={user.password} />
                        <label htmlFor="password">password</label>
                    </div>
                    <div className="inputBox">
                        <input type="password" name='reEnterPassword' required onChange={getValue} value={user.reEnterPassword} />
                        <label htmlFor="re-enterPassword">re-enter password</label>
                    </div>
                    <input type="button" value="Sign up" onClick={signUp} />
                    <div className='or'>

                        OR
                    </div>
                    <input type="button" value="Login" id='login' />
                </div>
            </div>

        </>
    )
}


export default SignUp