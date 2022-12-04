import React, { useState, useEffect } from 'react'
import TasksRow from '../TasksRow/TasksRow'
import './TasksList.css';
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

function TasksList() {
  const [tasksList, setTasksList] = useState([]);

  const loadTasks = async () => {
    await getDocs(collection(db, 'tasks'))
    .then((querySnapshot)=> {
      const newData = querySnapshot.docs.map((doc) => ({...doc.data(), id:doc.id}));
      setTasksList([...newData]);
    })
  }

  useEffect(() => {
    const q = query(collection(db, 'tasks'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let tasks = [];
      querySnapshot.forEach((doc) => {
        tasks.push({...doc.data(), id: doc.id});
        setTasksList(tasks);
      })
    });

    return () => unsubscribe();
  }, [])

  return (
    <div>
      <div className='label'>
        <div>Name</div>
        <div>Type</div>
        <div>Assigned to</div>
        <div>Assigned MCPs</div>
        <div>Status</div>
      </div>
        {tasksList?.map(task => (<TasksRow key={task.id} name={task.name} type={task.type} assigned={task.assigned} mcps={task.mcps} status={task.status}/>))}
    </div>
  )
}

export default TasksList