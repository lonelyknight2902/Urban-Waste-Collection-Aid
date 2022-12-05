import React, { useState, useEffect } from 'react'
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
import DBServices from '../../Model/DBServices.js';
import CreateTaskCollector from './CreateTaskCollector.jsx';

function CreateTaskCollectorController() {
  const [collectorsList, setCollectorsList] = useState([]);
  const [MCPsList, setMCPsList] = useState([]);
  const [name, setName] = useState("");
  const [collector, setCollector] = useState("");
  const [mcp, setMCP] = useState([]);
  const navigate = useNavigate();

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const onChangeAssigned = (choice) => {
    console.log('hello ', choice);
    setCollector(choice.value);
  }

  const onChangeMCPs = (choices) => {
    console.log(choices);
    setMCP(choices.map(choice => choice.value));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({
      name: name,
      type: 'collector',
      assigned: collector,
      mcps: mcp,
      status: 'In-progress'
    })
    await DBServices.addCollectorTask(name, collector, mcp);
    navigate('/dashboard');
  }

  useEffect(() => {

    return () => {
        DBServices.getCollectors(setCollectorsList);
        DBServices.getMCPs(setMCPsList);
    };
  }, [])

  return (
    <CreateTaskCollector collectorsList={collectorsList} MCPsList={MCPsList} handleSubmit={handleSubmit} onChangeName={onChangeName} onChangeAssigned={onChangeAssigned} onChangeMCPs={onChangeMCPs}/>
  )
}

export default CreateTaskCollectorController