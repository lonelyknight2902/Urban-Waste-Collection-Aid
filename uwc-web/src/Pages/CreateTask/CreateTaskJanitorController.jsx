import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import DBServices from "../../Model/DBServices.js";
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
import CreateTaskJanitor from './CreateTaskJanitor.jsx';

function CreateTaskJanitorController() {
  const [janitorsList, setJanitorsList] = useState([]);
  const [MCPsList, setMCPsList] = useState([]);
  const [name, setName] = useState("");
  const [janitor, setJanitor] = useState("");
  const [mcp, setMCP] = useState([]);
  const navigate = useNavigate();

  const onChangeName = (e) => {
    setName(e.target.value);
  }

  const onChangeAssigned = (choice) => {
    setJanitor(choice.value);
  }

  const onChangeMCPs = (choice) => {
    setMCP([choice.value]);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await DBServices.addJanitorTask(name, janitor, mcp);
    navigate('/dashboard')
  }

  useEffect(() => {
    return () => {
      DBServices.getJanitors(setJanitorsList);
      DBServices.getMCPs(setMCPsList);
    };
  }, [])

  return (
    <CreateTaskJanitor janitorsList={janitorsList} MCPsList={MCPsList} handleSubmit={handleSubmit} onChangeName={onChangeName} onChangeAssigned={onChangeAssigned} onChangeMCPs={onChangeMCPs}/>
  )
}

export default CreateTaskJanitorController