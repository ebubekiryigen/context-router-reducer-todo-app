import { memo, useCallback } from 'react'
import {useCustomReducer , useValid} from '../../Context'

function Form() {

   const {state,dispatch} = useCustomReducer()
   const {user} = useValid()

   const submitForm = useCallback((e) => {
    e.preventDefault()
    dispatch({
      type:'INSERT_TODO',
      todo: state.todo,
      userId: user.id
    })
  },[state.todo])

  const InputValuChange = useCallback((e) => {
    dispatch({
      type : 'UPDATE_TODO',
      value: e.target.value
    })
   },[])

   const AnonValid = useCallback((e) => {
    dispatch({
      type: 'ANON_VALİD',
      value: e.target.checked
    })
  }, [])

    return(
        <form className="p-4 flex gap-x-4 bg-white dark:bg-gray-600" onSubmit={submitForm}>
        <input className="dark:text-black w-[80%] h-10 rounded-xl border border-gray-600 px-4 text-center" value={state.todo} onChange={InputValuChange} placeholder="Görevinizi Buraya Yazınız" />
        <label className="flex gap-x-2 items-center text-sm">	<input type="checkbox" checked={state.anonymous} onChange={AnonValid} />Anonim </label>
        <button className="disabled:opacity-20 disabled:cursor-not-allowed dark:bg-indigo-500  w-[20%] h-10 rounded-2xl border border-gray-200 text-white bg-slate-800" disabled={!state.todo} type="submit">ekle</button>
      </form>

    )
}

export default memo(Form)