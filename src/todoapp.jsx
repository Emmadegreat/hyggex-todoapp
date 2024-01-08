import React, {useState} from 'react'

const Todoapp = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editIndex, setEditIndex] = useState(-1);

  const addTask = () => {
    if (newTask.trim() !== '') {
      if (editIndex !== -1) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = newTask;
        setTasks(updatedTasks);
        setEditIndex(-1);
      } else {
        setTasks([...tasks, newTask]);
      }
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const editTask = (index) => {
    setNewTask(tasks[index]);
    setEditIndex(index);
  };

    return (
        <div className='margin-auto pt-4'>
            <h1 className='text-center text-4xl font-bold'>Todo-App</h1>
             <div className="container mx-auto py-8">

      <div className="flex mb-4">
        <input
          type="text"
          className="border rounded-l p-2 w-3/4"
          placeholder="Add a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 rounded-r"
          onClick={addTask}
        >
          {editIndex !== -1 ? 'Edit' : 'Add'}
        </button>
      </div>
      <ul className="list-disc pl-4">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center justify-between mb-2">
            <span className={editIndex === index ? 'line-through' : ''}>
              {task}
            </span>
            <div>
              <button
                className="text-yellow-500 mr-2"
                onClick={() => editTask(index)}
              >
                Edit
              </button>
              <button
                className="text-red-500"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>


        </div>
    )
}

export default Todoapp
