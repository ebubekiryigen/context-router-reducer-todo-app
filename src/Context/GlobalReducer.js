import {createContext, useContext, useReducer, useEffect} from "react";
import reducer_todo from '../reducer/todoapp-reducer.js'
const Context = createContext()


const Provider = ({ children }) => {
    
    const [state, dispatch] = useReducer(reducer_todo, {
        todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
        todo: '',
        anonymous:false,
       })

	   useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(state.todos))
	}, [state.todos]);


	const data = {
		state,
		dispatch
	}

	return (
		<Context.Provider value={data}>
			{children}
		</Context.Provider>
	)

}

export const useCustomReducer = () => useContext(Context)
export default Provider