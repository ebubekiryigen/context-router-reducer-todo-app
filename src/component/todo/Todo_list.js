import { memo, useMemo } from 'react'
import Todo from './Todo'
import {useCustomReducer , useValid} from '../../Context'



function Todo_list() {

    const {state} = useCustomReducer()
    const {user} = useValid()


    const filterTodos = useMemo(() => state.todos.filter(todo => {
      return(
       todo.title.toLocaleLowerCase('TR').includes(state.TodosSearch.toLocaleLowerCase('TR'))
      ) && (
        state.TodoOnlyMe && user ? todo.userId === user.id : true
      ) && (
        state.FilterTodo ? (
          state.FilterTodo === 'completed' ? todo.complated : !todo.complated
        ) : true
      ) 
    }),[state.TodosSearch, user,state.todos, state.TodoOnlyMe,state.FilterTodo]) 
    
    return(
      <>
      {state.todos.length > 0 && (
        <ul className="bg-white dark:bg-transparent">
        {filterTodos.map((todo,index) => (
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