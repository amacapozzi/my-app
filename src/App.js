import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './Containers/Login/Login';
import Register from './Containers/Register/Register';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
          <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<Home/>}/>
          </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;