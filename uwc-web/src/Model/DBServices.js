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
  QuerySnapshot,
  where,
  Firestore,
  getDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase.js";

const DBServices = () => {

  const getJanitors = (setJanitorsList) => {
    const janitorQuery = query(collection(db, "janitors"));
    onSnapshot(janitorQuery, (querySnapshot) => {
      let janitors = [];
      querySnapshot.forEach((doc) => {
        janitors.push({ ...doc.data(), id: doc.id });
        setJanitorsList(janitors);
      });
    });
  };

  const getCollectors = (setCollectorsList) => {
    const collectorQuery = query(collection(db, "collectors"));
    onSnapshot(collectorQuery, (querySnapshot) => {
      let collectors = [];
      querySnapshot.forEach((doc) => {
        collectors.push({ ...doc.data(), id: doc.id });
        setCollectorsList(collectors);
      });
    });
  };

  const getMCPs = (setMCPsList) => {
    const mcpsQuery = query(collection(db, "mcps"));
    onSnapshot(mcpsQuery, (querySnapshot) => {
      let mcps = [];
      querySnapshot.forEach((doc) => {
        mcps.push({ ...doc.data(), id: doc.id });
        setMCPsList(mcps);
      });
    });
  };

  const getTasks = (setTasksList) => {
    const tasksQuery = query(collection(db, "tasks"));
    onSnapshot(tasksQuery, (querySnapshot) => {
      let tasks = [];
      querySnapshot.forEach((doc) => {
        tasks.push({ ...doc.data(), id: doc.id });
        setTasksList(tasks);
      });
    });
  };

  const getTask = async (setTask, id) => {
    const taskQuery = doc(db, "tasks", id);
    try {
      const docSnap = await getDoc(taskQuery);
      console.log(docSnap.data());
      setTask(docSnap.data());
    } catch(error) {
      console.log(error);
    }
  }

  const addJanitorTask = async (name, janitor, mcp) => {
    await addDoc(collection(db, "tasks"), {
      name: name,
      type: "Janitor",
      assigned: janitor,
      mcps: mcp,
      status: "In-progress",
    });
  };

  const addCollectorTask = async (name, collector, mcp) => {
    await addDoc(collection(db, "tasks"), {
      name: name,
      type: "Collector",
      assigned: collector,
      mcps: mcp,
      status: "In-progress",
    });
  };

  const deleteTask = async (id) => {
    const docRef = doc(db, "tasks", id);
    try {
      await deleteDoc(docRef);
      alert('Delete successfully')
    }catch(error) {
      console.log(error)
    }
  }

  return {
    getJanitors,
    getCollectors,
    getMCPs,
    getTasks,
    getTask,
    deleteTask,
    addJanitorTask,
    addCollectorTask,
  };
};

export default DBServices();
