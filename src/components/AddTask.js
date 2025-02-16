export const AddTask = () => {
  return (
    <section className="addTask">
        <form>
            <input type="text" name="task" autocomplete="off" placeholder="Task Name"/>
            <button type="submit">ADD</button>
        </form>
    </section>
  )
}
