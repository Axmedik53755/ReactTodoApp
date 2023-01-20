import { useState } from 'react'
import uuid from 'react-uuid';

function App() {


  const StartTodoList = [
    { id: uuid(), task: "React Öyrənəcəm", completed: true },
    { id: uuid(), task: "Kitab Oxuyacam", completed: false },
    { id: uuid(), task: "Gəzməyə Gedəcəm", completed: false }

  ]

  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState(StartTodoList)

  const handleDelete = (id) => {
    const updateTodo = todos.filter(item => item.id !== id)
    setTodos(updateTodo)
    console.log(id)
  }


  function handleClick(e) {
    console.log(todos)
    if (!todo == '') {
      const newTodo = { id: uuid(), task: todo, completed: false }
      setTodos([...todos, newTodo])
      setTodo('')
    } else {
      alert('Bos olmaz')
    }
  }

  function handleTodoClick(id) {
    const updatesTodos = todos.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed }
      }
      return item
    })
    setTodos(updatesTodos)
  }



  return (
    <div className='w-full flex justify-center  min-h-screen bg-cyan-700'>
      <div className='w-[40rem]  h-auto  flex flex-col items-center mt-10 border rounded-lg bg-rose-500'>

        <div className='w-11/12 mx-auto text-white text-3xl pt-3 text-center font-bold'>Todolarınızı əlavə edin</div>

        <div className='space-x-3'>
          <input
            onKeyPress={(e) => {
              if (e.key === 'Enter') handleClick(
              )
            }}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className='w-96 outline-none p-2 rounded-lg mt-7' type="text" />
          <button

            onClick={handleClick}
            className='p-2 rounded-md bg-blue-400 hover:bg-blue-300 active:bg-blue-600'>Əlavə et</button>
        </div>
        <div className='md:w-9/12 w-11/12 mt-10  rounded-lg text-white'>
          {todos.map(item => {
            return (
              <ul className='rounded-lg bg-gray-700 flex justify-between text-2xl p-2 mt-1' key={uuid()}>
                <li

                  onClick={() => handleTodoClick(item.id)}
                  className={`${item.completed ? 'line-through' : ''} hover:cursor-pointer hover:text-blue-500`}
                >
                  {item.task}
                </li>
                <div
                  onClick={() => handleDelete(item.id)}
                  className='hover:cursor-pointer text-2xl' >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </div>
              </ul>)
          })}
        </div>
      </div>
    </div>
  )
}

export default App
