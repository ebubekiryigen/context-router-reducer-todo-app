import { NavLink} from "react-router-dom"
import {useValid} from '../Context'


export default function Header() {
    const {user, setUser} = useValid()
    const logout_site = () => {
        setUser(false)
    } 
    return(
        <div className="flex bg-indigo-400 text-white  justify-between">
        <lable className="text-xl font-medium p-4">TodoApp</lable>
        <nav className="flex items-center justify-center gap-x-4 w-[50%]">
          <NavLink className={({ isActive }) => isActive ? 'border-black border-b-2' : ''} to="/">Anasayfa</NavLink>
          <NavLink className={({ isActive }) => isActive ? 'border-black border-b-2' : ''} to="/todo">Todo</NavLink>
        </nav>
        {user &&
         <lable className="text-l font-medium p-4 flex gap-x-4">
         <p>Hoş Geldin {user.username} </p>
         <a onClick={logout_site}>Çıkış Yap</a>
         </lable>
        }
      </div>
    )
}