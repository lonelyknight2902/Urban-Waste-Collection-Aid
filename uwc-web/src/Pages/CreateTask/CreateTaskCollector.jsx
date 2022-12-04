import React, { useState, useEffect } from 'react'
import './CreateTask.css';
import Select from 'react-select';
import { Link, useNavigate } from "react-router-dom";
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

function CreateTaskCollector() {
  const [collectorsList, setCollectorsList] = useState([]);
  const [MCPsList, setMCPsList] = useState([]);
  const [name, setName] = useState("");
  const [collector, setCollector] = useState("");
  const [mcp, setMCP] = useState([]);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      name: name,
      type: 'collector',
      assigned: collector,
      mcps: mcp,
      status: 'In-progress'
    })
    await addDoc(collection(db, 'tasks'), {
      name: name,
      type: 'Collector',
      assigned: collector,
      mcps: mcp,
      status: 'In-progress'
    })
    navigate('/dashboard');
  }

  useEffect(() => {
    const q1 = query(collection(db, 'collectors'));
    const q2 = query(collection(db, 'mcps'));
    const getCollectors = onSnapshot(q1, (querySnapshot) => {
      let collectors = [];
      querySnapshot.forEach((doc) => {
        collectors.push({...doc.data(), id: doc.id});
        setCollectorsList(collectors);
        console.log(collectorsList);
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
      getCollectors();
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
            <select required onChange={(e) => setCollector(e.target.value)}>
            <option value="" disabled selected>+ Add assigned collector</option>
              {collectorsList.map((collector) => {
                return (<option value={collector.name}>{collector.name}</option>)
              })}
            </select>
          </div>
          <div className="auth_input">
            <label htmlFor="assigned-mcp">Assigned MCP</label>
            <Select onChange={(choices) => setMCP(choices.map(choice => choice.value))} isMulti={true} options={MCPsList.map((mcp) => {
                return {
                    value: mcp.number,
                    label: mcp.number
                }
            })}/>
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

export default CreateTaskCollector