import React, { useState, useEffect } from 'react'
import './CreateTask.css';
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

function CreateTaskJanitor() {
  const [janitorsList, setJanitorsList] = useState([]);
  const [MCPsList, setMCPsList] = useState([]);
  const [name, setName] = useState("");
  const [janitor, setJanitor] = useState("");
  const [mcp, setMCP] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      name: name,
      type: 'Janitor',
      assigned: janitor,
      mcps: mcp,
      status: 'In-progress'
    })
    await addDoc(collection(db, 'tasks'), {
      name: name,
      type: 'Janitor',
      assigned: janitor,
      mcps: mcp,
      status: 'In-progress'
    })
  }

  useEffect(() => {
    const q1 = query(collection(db, 'janitors'));
    const q2 = query(collection(db, 'mcps'));
    const getJanitors = onSnapshot(q1, (querySnapshot) => {
      let janitors = [];
      querySnapshot.forEach((doc) => {
        janitors.push({...doc.data(), id: doc.id});
        setJanitorsList(janitors);
        console.log(janitorsList);
      })
    });

    const getMCPs = onSnapshot(q2, (querySnapshot) => {
      let mcps = [];
      querySnapshot.forEach((doc) => {
        mcps.push({...doc.data(), id: doc.id});
        setMCPsList(mcps);
        console.log(mcps);
      })
    });

    return () => {
      getJanitors();
      getMCPs();
    };
  }, [])

  return (
    <div className='create-task'>
      <div className='left-panel'>
      <h1>Create janitor's task</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="auth_input" >
            <label htmlFor="task-name">Name</label>
            <input
              type="text"
              placeholder="Enter task name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="auth_input">
            <label htmlFor="assigned-to">Assigned to</label>
            <select required onChange={(e) => setJanitor(e.target.value)}>
            <option value="" disabled selected>+ Add assigned janitor</option>
              {janitorsList.map((janitor) => {
                console.log(janitor);
                return (<option value={janitor.name}>{janitor.name}</option>)
              })}
            </select>
          </div>
          <div className="auth_input">
            <label htmlFor="assigned-mcp">Assigned MCP</label>
            <select required onChange={(e) => setMCP([e.target.value])}>
            <option value="" disabled selected>+ Add assigned MCP</option>
              {MCPsList.map((mcp) => {
                console.log(mcp);
                return (<option value={mcp.number}>{mcp.number}</option>)
              })}
            </select>
          </div>
          <div className="submit">
            <button type='submit'>+ Add task</button>
          </div>
        </form>
      </div>
      <img src="https://otonari.tokyo/media/wp-content/uploads/2021/04/messageImage_1617255133080-min-768x514.jpg" alt="CreateTask" className='image'></img>
    </div>
  )
}

export default CreateTaskJanitor