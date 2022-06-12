import './App.css';
import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './Containers/Login/Login';
import Register from './Containers/Register/Register';
import Dashboard from './Dashboard/Dashboard';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
    
          <Routes>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/" element={<Home/>}/>
          </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;