import React, { useState, useEffect } from 'react'
import DBServices from '../../Model/DBServices.js';
import {db} from '../../firebase.js';
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
  getDocs,
} from 'firebase/firestore';
import TasksList from './TasksList.jsx';
import { useNavigate } from 'react-router-dom';

function TasksListController() {
  const [tasksList, setTasksList] = useState([]);
  const navigate = useNavigate();
  const viewDetail = (e) => {
    let id = e.currentTarget.id
    console.log(e.currentTarget.id)
    navigate(`/view/${id}`);
  }

  useEffect(() => {
    return DBServices.getTasks(setTasksList);
  }, [])

  return (
    <TasksList tasksList={tasksList} viewDetail={viewDetail}/>
  )
}

export default TasksListController;