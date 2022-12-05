import React, { useEffect, useState } from 'react'
import ViewTaskJanitor from './ViewTaskJanitor'
import DBServices from '../../Model/DBServices';
import { useNavigate, useParams } from 'react-router-dom';
import ViewTaskCollector from './ViewTaskCollector';

function ViewTaskController() {
const [task, setTask] = useState({});
const navigate = useNavigate();

let { id } = useParams();

const onDelete = (e) => {
    e.preventDefault();
    console.log("haha")
    DBServices.deleteTask(id);
    navigate("/dashboard");
}

useEffect(() => {
    DBServices.getTask(setTask, id);
}, []);
  if(task.type=="Janitor") {
    return <ViewTaskJanitor task={task} onDelete={onDelete}/>
  } else if(task.type == "Collector") {
    return <ViewTaskCollector task={task} onDelete={onDelete}/>
  }
}

export default ViewTaskController