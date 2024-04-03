import { useState } from 'react';
import React from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';
import {app} from '../login/firebaseConfig.js';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
    const auth = getAuth();
    const history = useNavigate();
    const [user,setUser] = useState({
        name: '',
        email: '',
        password: ''
    })

    const registerUser = () => {
        createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            const registeredUser = userCredential.user;
            console.log(registeredUser);
            alert('registration successful');
            history('/login')
        })
        .catch((error) => {
            alert(error.message);
        });
    };
    

    const handleChange = (e) => {
        const {name,value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    return (
        <div className="register">
            <h1>Register</h1>
                <input type="text" name="name" value = {user.name} onChange = {handleChange} placeholder="Name" required/>
                <input type="text" name="email" value = {user.email} onChange = {handleChange}placeholder="Email" required/>
                <input type="password" name="password" value = {user.password} onChange = {handleChange} placeholder="Password" required/>
                <div className='button' onClick = {registerUser}>Register</div>
                <div>or</div>
                <div className='button' onClick = {() => history('/login')}>Login</div>
        </div>
    )
}

export default Register;