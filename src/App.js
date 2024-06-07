import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import LoginForm from './Components/LoginForm';
function App() {
  return (
    <div >
      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/validate' element={<LoginForm/>}/>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
