import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className = 'bg-green-400 text-black p-4 rounded-xl'>TailWind</h1>
      <div class = "relative h- [400px] w-[300px] rounded-md">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" 
          src="https://images.pexels.com/photos/27334083/pexels-photo-
          27334083/free-photo-of-a-view-of-a-staircase-with-ornate-carvings.jpeg?auto=
          compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512"
        />
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</div>
    </>
  )
}

export default App
