import classNames from "classnames"
import {useCustomReducer } from '../../Context'
import { useCallback} from "react"
import { useSearchParams } from "react-router-dom"


export default function Filter() {

    const {state,dispatch} = useCustomReducer()
    let [searchParams, setSearchParams] = useSearchParams()

    const todoFilterCompleted = useCallback(value => {
        dispatch({
          type: 'TODO_FILTER_COMPLETED',
          value
        })
      }, [])

      const changeOnlyMe = useCallback((value) => {
        dispatch({
          type:'ONLYME_CHANGE_TODO',
          value
        })
      },[])

      const searchTodo = useCallback((e) => {
        dispatch({
          type:'SEARCH_TODO',
          value: e.target.value
        })
      },[])


    return(
        <div className="flex gap-x-4 p-4 bg-gray-200 flex-col  justify-center items-center ">
            <div className="p-3 w-[800px] ">
            <input className="text-black px-4  rounded-xl w-[100%] text-center  h-9 text-sm border border-gray-200" type="text" placeholder="Arama  Yap" value={state.search} onChange={searchTodo}  />
            </div>
            <div>
            <button onClick={changeOnlyMe} className={classNames({
            "h-7 rounded-xl px-4 text-xs": true,
            "bg-gray-200": !state.TodoOnlyMe,
            "bg-indigo-500 text-white": state.TodoOnlyMe
        })}>
            Sadece Benim Todolarım
        </button>
        <button
            onClick={() => todoFilterCompleted(state.FilterTodo === 'completed' ? false : 'completed')}
            className={classNames({
            "h-7 rounded-xl px-4 text-xs": true,
            "bg-gray-200": state.FilterTodo !== 'completed',
            "bg-indigo-500 text-white": state.FilterTodo === 'completed',
        })}>
            Tamamlanmış Todolar
        </button>
        <button
            onClick={() => todoFilterCompleted(state.FilterTodo === 'uncompleted' ? false : 'uncompleted')}
            className={classNames({
                "h-7 rounded-xl px-4 text-xs": true,
                "bg-gray-200": state.FilterTodo !== 'uncompleted',
                "bg-indigo-500 text-white": state.FilterTodo === 'uncompleted',
            })}>
            Tamamlanmamış Todolar
        </button>
            </div>
        
      
    </div>
    )
}