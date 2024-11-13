import { useState } from 'react'
import TodoForm from './components/ToDoForm'
import TodoItem from './components/ToDoItem'
import { ContextProvider } from './context/ToDoContext'

function App() {
  const [todos, setTodos] = useState(0)

   const addTodo = (todo) => {
    setTodos()
   }

   const updateTodo = (id , todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))  
   }

  return (
    <TodoProvider value = {{todos , updateTodo , deleteTodo , toggleComplete , addTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">

                        < TodoForm />

                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        
                        {/*Loop and Add TodoItem here */}

                    </div>
                </div>
            </div>
    </TodoProvider> 
  )
}

export default App