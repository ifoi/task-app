import './App.css';
import {useState, useEffect} from 'react';
import Overview from "./components/Overview";

function App() {
  
  const  [task, setTask] = useState( "") ;

  const [tasksArray, setTasksArray] = useState([]) ;

  useEffect(() => {
    // first
  
    // return () => {
    //   second
    // }
  }, [tasksArray]);
  

  // function setTasksArray(tasksArray)

  function addTask(event) {
    event.preventDefault() ;
    // console.log("add task clicked");
    setTasksArray(prevTasksArray => [ ...prevTasksArray, task]);
  
     return tasksArray ;
   }

   function handleChange(event) {
    setTask(prevTask => event.target.value) ;
 }  

  return (
    <div className="App">
      
      <form>
         <label htmlFor="task"> Enter task </label>
         <input onChange={handleChange}
           value = {task}
           type="text" id = "task" />
         <button type="submit" onClick={addTask}> Add task </button>

      </form>
      <Overview tasks={tasksArray}/>
            
    </div>
  );
}

export default App;
