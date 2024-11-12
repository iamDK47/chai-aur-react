import { createContext, useContext } from "react";


const toDoContext = createContext({

   todos:
         

})

const useTodo = () => {
   useContext(toDoContext)
}