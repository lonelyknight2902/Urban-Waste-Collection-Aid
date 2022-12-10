import './App.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import Login from './Pages/Login/Login';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import CreateTaskCollectorController from './Pages/CreateTask/CreateTaskCollectorController';
import CreateTaskJanitorController from './Pages/CreateTask/CreateTaskJanitorController';
import ViewTaskController from './Pages/ViewTask/ViewTaskController';
import TopBar from './Components/TopBar/TopBar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <TopBar/>
      <div className='wrapper'>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/createtask/janitor' element={<CreateTaskJanitorController/>}/>
        <Route path='/createtask/collector' element={<CreateTaskCollectorController/>}/>
        <Route path='/view/:id' element={<ViewTaskController/>}/>
      </Routes>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
