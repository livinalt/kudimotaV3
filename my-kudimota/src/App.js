import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-browser-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route index element= {<Home/>}/>
            <Route path ='/Home' element= {<Home/>}/>
            <Route path ='/Home' element= {<Home/>}/>
            <Route path = '/Home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
