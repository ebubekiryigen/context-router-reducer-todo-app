
import { Navigate, useLocation } from "react-router-dom"

export default function PageNotFound() {

    const location = useLocation()
    const returnHome = () => {
        return <Navigate to="/" replace={true} state={{
            location : location.pathname
         }} />
    }

    return(
        <div className="flex pr-4 flex-col items-center">
            <h1 className="text-xl font-medium  text-center p-10 ">
             404
            </h1>
            <h3 className="text-xl font-medium mb-2 text-center  p-10">
              KNK bu sayfa yok olmuş sen gel anasyfaya dön
            </h3>
            <button onClick={returnHome} className="h-10 px-4 rounded bg-red-100 text-red-700 w-[25%]" >Anasyfaya Geri Dön</button>
        </div>
    )
}