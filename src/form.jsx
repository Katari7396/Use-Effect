import React, { useEffect, useState } from 'react'
import './form.css'

function Form() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState('false')

    useEffect(()=>{
        if(isLogin) {
            console.log('user login succeessfull')
        } else{
            console.log('user login failed')
        }
    },[isLogin])

    const handleLogin = (e) => {
        e.preventDefault()

        if(setIsLogin) {
            setIsLogin(true);
            alert(`Welcome ${username}`)
        } else{
            alert('Invalid Credentials');
        }
    }

    const handleLogout = (e) => {
        setIsLogin(false)
    }

    if(isLogin){
        return(
            <div>
                <h1>LOGIN FORM</h1>
                <h3>WELCOME, {username} 🙋‍♂️</h3>
                <button onClick={handleLogout}>LOGOUT</button>
            </div>
        );
    } else {
        return(
            <form onSubmit={handleLogin}>
                <div>
                    <input type="text" value={username} placeholder='ENTER USER NAME' onChange={(e)=>setUsername(e.target.value)} required />
                </div>
                <div>
                    <input type="text" value={password} placeholder='ENTER PASSWORD' onChange={(e)=>setPassword(e.target.value)} required />
                </div>

                <button type='submit'>LOGIN</button>
            </form>
        )
    }
}

export default Form
