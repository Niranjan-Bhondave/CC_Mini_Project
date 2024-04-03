import React, { useState } from 'react';
import './App.css';
import Homepage from './components/homepage/Homepage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={user ? <Homepage setLoginUser={setUser}/> : <Login  setUser = {setUser}/>} />
          <Route path='/login' element={<Login setUser={setUser} />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
