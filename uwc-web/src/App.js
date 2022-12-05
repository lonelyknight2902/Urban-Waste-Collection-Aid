import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateTaskCollectorController from './Pages/CreateTask/CreateTaskCollectorController';
import CreateTaskJanitorController from './Pages/CreateTask/CreateTaskJanitorController';
import ViewTaskController from './Pages/ViewTask/ViewTaskController';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/createtask/janitor' element={<CreateTaskJanitorController/>}/>
        <Route path='/createtask/collector' element={<CreateTaskCollectorController/>}/>
        <Route path='/view/:id' element={<ViewTaskController/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
