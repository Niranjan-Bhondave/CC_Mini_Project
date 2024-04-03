import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ setUser }) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        });
    };

    const login = () => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                setUser(userCredential.user);
                navigate('/');
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <div className="login">
            <h1>Login</h1>
            <input type="text" name="email" value={data.email} onChange={handleChange} placeholder="Email" required />
            <input type="password" name="password" value={data.password} onChange={handleChange} placeholder="Password" required />
            <div className='button' onClick={login}>Login</div>
            <div>or</div>
            <div className='button' onClick={() => navigate('/register')}>Not Registered ? Register here</div>
        </div>
    );
};

export default Login;
