import { memo, useMemo } from 'react'
import Todo from './Todo'
import {useCustomReducer , useValid} from '../../Context'
import {useSearchParams} from "react-router-dom"



function Todo_list() {

    const {state} = useCustomReducer()
    const {user} = useValid()
    const [searchParams,setSearchParams] = useSearchParams()
    
    const todoFilter = useMemo(() => state.todos.filter(todo => {
      return ( 
        searchParams.get('search') ? todo.title.toLocaleLowerCase('TR').includes(searchParams.get('search').toLocaleLowerCase('TR')) : true
      ) && 
      ( searchParams.get('only_me_todo') === "true" && user ? todo.userId === user.id : true
      ) && 
      ( searchParams.get('complated_todo') === "true" ? todo.complated === true : true
      ) &&
      ( searchParams.get('decomplated_todo') === "true" ? todo.complated === false : true
      )
    }),[state.todos,searchParams.get('only_me_todo'),searchParams.get('complated_todo'),searchParams.get('decomplated_todo'),searchParams.get('search')])

    
    return(
      <>
      {state.todos.length > 0 && (
        <ul className="bg-white dark:bg-transparent">
        {todoFilter.map((todo,index) => (
          <Todo key={index} todo={todo} index={index} />
        ))}
      </ul>
      )  || (
        <div className='p-5 text-center'> Henüz Hiç Todo Eklemediniz</div>
        )}
        </>
    )
}

export default memo(Todo_list)