import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login'



function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
        <Routes>
          <Route path="*" element={<Home/>}/>
          <Route path="/login" href={<Login/>}/>
          <Route path="/" element={<Home/>}/>
        
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;