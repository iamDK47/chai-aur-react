import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className = 'bg-green-400 text-black p-4 rounded-xl'>TailWind</h1>
      <Card username="jack" btnText="click me" source="https://static1.srcdn.com/wordpress/wp-content/uploads/2021/02/Batman-89-Comic-Characters-Joker-Jack-Napier-Nicholson.jpg" />
      <Card username="sara" btnText="click me" source="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"/>
      <Card username="DK" btnText="click here" source="https://upload.wikimedia.org/wikipedia/commons/b/bb/DK_%282020%29.svg"/>
    </>
  )
}

export default App
