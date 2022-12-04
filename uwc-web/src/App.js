import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import CreateTask from './Pages/CreateTask/CreateTask';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/createtask' element={<CreateTask/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
