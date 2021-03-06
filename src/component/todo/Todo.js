import className from "classnames"
import {useValid, useCustomReducer} from "../../Context"
import users from "../../data/user.json"
import {useCallback} from "react"


function TodoItem({todo,index}) {
    const {user} = useValid()
    const {state, dispatch} = useCustomReducer()

    const UserTo = users.find(user => user.id === todo.userId)

    const deleteTodo = useCallback((id) => {
        dispatch({
          type:'DELETE_TODO',
          id
        })
      },[])

      const toggleTodo = useCallback((id) => {
        dispatch({
          type:'COMPALTED_TODO',
          id
        })
      },[])
      const updateTodoItem = useCallback((id,value) => {
        dispatch({
          type:'UPDATETODOITEM_TODO',
          id,
          value
        })
      },[])


    return(

        <li className="border-b p-5 border-gray-400">   
        <div className={className({
            "flex items-center justify-between  text-black  dark:text-white": true,
            "opacity-40" : todo.complated
        })}>
        {todo.userId === user.id && !todo.complated && (
            <input type="text" onChange={e => updateTodoItem(todo.id,e.target.value)} className="h-10 border-none w-[75%] bg-transparent" value={todo.title}  />
        )  || todo.title}
        {todo.userId === user.id && (
             <div className='flex gap-x-4'>
             <button className="text-sm rounded-md bg-red-500 h-10 px-5  text-white"  onClick={() => deleteTodo(todo.id)}>Sil</button>
             <button className="text-sm rounded-md bg-green-500 h-10 px-5 text-white" onClick={()=> toggleTodo(todo.id)}>{todo.complated ? 'Tamamlandı' : 'tamamla'}</button>
         </div>
        )}
         </div>
         <div >
            {UserTo.id !== user.id && (
               <>  
                {!todo.anonymous && (<>
                    <b className=" text-indigo-500 font-medium underline "> {UserTo.username}</b> Tarafından Eklendi
                </>)}
                {todo.anonymous && (<>
                    <b className=" text-indigo-500 font-medium "> Anonim </b> Olarak Eklendi
                </>)}
                
                 </>)
             }
           
         </div>
        </li> 
    )
}

export default TodoItem