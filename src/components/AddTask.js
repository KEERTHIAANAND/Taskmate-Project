export const AddTask = ({tasklist,setTasklist,task,setTask}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    //Edit function
    if(task.id){
      const date= new Date();
      const updateTask=tasklist.map((todo)=>(
        todo.id === task.id ? {id: task.id, name:task.name,time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`} : todo));
        setTasklist(updateTask);
        setTask({});
    }
    //Delete function
    else{
      const date=new Date();
    const newTask ={id: date.getTime(), name: e.target.task.value, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}
    setTasklist([...tasklist, newTask]);
    setTask({});
    }
  }
  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" value={task.name || ""} autoComplete="off" placeholder="Task Name" onChange={e=>setTask({...task, name:e.target.value})}/>
            <button type="submit">ADD</button>
        </form>
    </section>
  )
}
