import users from "../data/user.json"
import {useValid} from '../Context'
import { Navigate, useLocation  } from "react-router-dom"
import {Formik, ErrorMessage} from "formik"
import  Input from '../component/form/Input'
import Yup from "../component/form/validations/Validation"


export default function Login() {

    const location = useLocation()
    const {user, setUser} = useValid()

    if(user) {
        return <Navigate to="/todo" replace={true} state={{
           location : location.pathname
        }} />
    }

    const validSchema = Yup.object().shape({
        username:Yup.string().required(),
        password:Yup.string().required()
    })

    return(
        <div className="flex flex-1 items-center justify-center p-4 flex-col">
                 <h1 className="text-xl font-medium" >Giriş Formu</h1>
                  <Formik 
                    initialValues={{username:"",password:""}}
                    onSubmit={(values) => {
                    const currentUser = users.find(user => user.username === values.username && user.password === values.password)
                    if(currentUser) {
                        setUser(currentUser)
                        return <Navigate to="/todo" replace={true} state={{
                            location : location.pathname
                         }} />
                    } else {
                        alert("Kullanıcı Bulunamadı")
                    }
                  }}
                  validationSchema={validSchema} 
                  >
                 {({handleSubmit}) => (
                    <form className="p-4 flex flex-col " onSubmit={handleSubmit}>
                       <Input label="Kullanıcı Adı" name="username" />
                       <div className="text-red-400"><ErrorMessage  name="username" /></div>
                       <Input label="Şifre" name="password" type="password" />
                       <div className="text-red-400"><ErrorMessage  name="password" /></div>
                       <button type="submit" className="py-2 my-2 border border-gray-200 bg-indigo-500 rounded-2xl w-[100px] text-white ">Giriş Yap</button>
                    </form>
                  )}
                  </Formik>
        </div>
    )
}