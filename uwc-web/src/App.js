import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import CreateTaskJanitor from './Pages/CreateTask/CreateTaskJanitor';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateTaskCollector from './Pages/CreateTask/CreateTaskCollector';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/createtask/janitor' element={<CreateTaskJanitor/>}/>
        <Route path='/createtask/collector' element={<CreateTaskCollector/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
