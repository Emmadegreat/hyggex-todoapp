import React, {useState} from 'react'

const Todoapp = () => {

  const [item, setItem] = useState([]);
  const [newitem, setNewitem] = useState('');
  const [edititemIndex, setEdititemIndex] = useState(-1);

    const addTask = () => {
    if (newitem.trim() !== '') {
      if (edititemIndex !== -1) {
        const updatedTasks = [...item];
        updatedTasks[edititemIndex] = newitem;
        setItem(updatedTasks);
        setEdititemIndex(-1);
      } else {
        setItem([...item, newitem]);
      }
      setNewitem('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = item.filter((_, i) => i !== index);
    setItem(updatedTasks);
  };

  const editTask = (index) => {
    setNewitem(item[index]);
    setEdititemIndex(index);
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
              value={newitem}
              onChange={(e) => setNewitem(e.target.value)}
            />
            <button
              className="bg-blue-600 text-white px-2 text-center w-[100px] rounded-r"
              onClick={addTask}
            >
              {edititemIndex !== -1 ? 'Edit' : 'Add Item'}
            </button>
          </div>
          <ul className="list-disc pl-4">
            {item.map((task, index) => (
              <li key={index} className="flex items-center justify-between mb-2">
                <span className={edititemIndex === index ? 'line-through' : ''}>{ index+1}. { task}</span>
                <div>
                  <button
                    className="text-yellow-500 mr-2 border-2 rounded p-2 w-[64px]"
                    onClick={() => editTask(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 border-2 rounded p-2 w-[64px]"
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
