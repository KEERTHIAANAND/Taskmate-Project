export const ShowTask = () => {
  const tasks=[
    {id:1000, Name: "Task 1", time: "2:10:00 AM 16/2/2025"},
    {id:1000, Name: "Task 1", time: "2:10:00 AM 16/2/2025"},
    {id:1000, Name: "Task 1", time: "2:10:00 AM 16/2/2025"},
  ]
  return (
    <section className="showTask">
        <div className="head">
            <div>
                <span className="title">Todo</span>
                <span className="count">0</span>
            </div> 
            <button className="clearAll">Clear All</button>
        </div>
        <ul>
          {tasks.map((task) => (
            <li>
            <p>
              <span className="name">{task.name} A</span>
              <span className="time">{task.time}</span>
            </p>
            <i className="bi bi-pencil-square"></i>
            <i className="bi bi-trash"></i>
          </li>
          ))}
        </ul>
    </section>
  )
}
