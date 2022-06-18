
import { Navigate, useLocation } from "react-router-dom"
import Filter from "../../component/todo/Filter"
import Form from "../../component/todo/Form"
import Todo_list from "../../component/todo/Todo_list"
import {useValid} from '../../Context'

export default function TodoApp() {

    const {user} = useValid()
     
    const location = useLocation()
    if(!user) {
         return <Navigate to="/login" replace={true} state={{
            location : location.pathname
         }} />
    }
    return(<>
    
      <Form />
      <Filter />
      <Todo_list />

    
    </>)
}