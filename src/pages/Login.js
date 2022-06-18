import { useState } from 'react'
import users from "../data/user.json"
import {useValid} from '../Context'
import { Navigate, useLocation } from "react-router-dom"


export default function Login() {

    const location = useLocation()
    const {user, setUser} = useValid()
    const [password,setPassword] = useState('')
    const [username,setUsername] = useState('')

    if(user) {
        return <Navigate to="/todo" replace={true} state={{
           location : location.pathname
        }} />
    }

    const submitHandle = (e) => {
        e.preventDefault()
        const currentUser = users.find(user => user.username === username && user.password === password)
        if(currentUser) {
            setUser(currentUser)
            return <Navigate to="/todo" replace={true} state={{
                location : location.pathname
             }} />
        } else {
            alert("Kullanıcı Bulunamadı")
        }
    }
    return(
        <div className="flex flex-1 items-center justify-center p-4 flex-col">
                 <h1 className="text-xl font-medium" >Giriş Formu</h1>
                <form className="p-4 flex flex-col " onSubmit={submitHandle}>
                        <label>
                         <p className="py-2">Kullanıcı Adı</p>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} className="flex-1 w-[300px] border border-gray-700 rounded-2xl p-2 " type="text" placeholder="Kullanıcı Adı" />
                        </label>
                       <label>
                       <p className="py-2">Şifre</p>
                        <input  value={password} onChange={(e) => setPassword(e.target.value)} className="flex-1 w-[300px] border border-gray-700 rounded-2xl p-2" type="password" placeholder="Şifre" />
                        </label>
                        <button className="py-2 my-2 border border-gray-200 bg-indigo-500 rounded-2xl w-[100px] text-white ">Giriş Yap</button>
                </form>
        </div>
    )
}