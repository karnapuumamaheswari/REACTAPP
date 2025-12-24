import { useEffect, useState } from 'react'

const Todos = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data.slice(0, 10)))
      .catch(() => setTodos([]))
  }, [])

  return (
    <div className="todo-container">
      {todos.map(todo => (
        <div className="todo-card" key={todo.id}>
          <h4>{todo.title}</h4>
          <p>
            Status: {todo.completed ? 'Completed' : 'Not Completed'}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Todos
