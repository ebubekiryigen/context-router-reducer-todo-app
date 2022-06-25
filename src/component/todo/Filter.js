import classNames from "classnames"
import { useSearchParams } from "react-router-dom"
import { useEffect} from "react"


export default function Filter() {

    const [searchParams, setSearchParams] = useSearchParams({only_me_todo: "false", complated_todo: "false", decomplated_todo: "false",search:"" })


    useEffect(() => {
         setSearchParams(searchParams)
    }, [])
    
      const todo_only_me = () => {
        if(searchParams.get("only_me_todo") === "false") {
        setSearchParams({only_me_todo: "true", complated_todo: searchParams.get("complated_todo"), decomplated_todo:  searchParams.get("decomplated_todo"), search:searchParams.get("search") })
        } else {
          setSearchParams({only_me_todo: "false", complated_todo: searchParams.get("complated_todo"), decomplated_todo:  searchParams.get("decomplated_todo"), search:searchParams.get("search")  })
        }
      }
      const todo_complated = () => {
        if(searchParams.get("complated_todo") === "false") {
        setSearchParams({only_me_todo: searchParams.get("only_me_todo"), complated_todo: "true", decomplated_todo:  "false", search:searchParams.get("search")  })
        } else {
          setSearchParams({only_me_todo:searchParams.get("only_me_todo"), complated_todo: "false" , decomplated_todo:  searchParams.get("decomplated_todo"), search:searchParams.get("search")  })
        }
      }
       const todo_decomplated = () => {
        if(searchParams.get("decomplated_todo") === "false") {
        setSearchParams({only_me_todo: searchParams.get("only_me_todo"), complated_todo: "false", decomplated_todo:  "true", search:searchParams.get("search")  })
        } else {
          setSearchParams({only_me_todo: searchParams.get("only_me_todo"), complated_todo: searchParams.get("complated_todo"), decomplated_todo:  "false", search:searchParams.get("search")  })
        }
      }

      const search_todo = (e) => {
        setSearchParams({only_me_todo: searchParams.get("only_me_todo"), complated_todo:searchParams.get("complated_todo"), decomplated_todo:  searchParams.get("decomplated_todo"), search:e  })
      }


    
    
    return(
        <div className="flex gap-x-4 p-4 bg-gray-200 flex-col  justify-center items-center ">
            <div className="p-3 w-[800px] ">
            <input className="text-black px-4  rounded-xl w-[100%] text-center  h-9 text-sm border border-gray-200" type="text" placeholder="Arama  Yap"  onChange={(e) => search_todo(e.target.value)}  />
            </div>
            <div>
            <button onClick={() => todo_only_me()} className={classNames({
            "h-7 rounded-xl px-4 text-xs": true,
            "bg-gray-200":searchParams.get('only_me_todo') === "false",
            "bg-indigo-500 text-white": searchParams.get('only_me_todo') === "true"
        })}>
            Sadece Benim Todolarım
        </button>
        <button
            onClick={() => todo_complated()}
            className={classNames({
            "h-7 rounded-xl px-4 text-xs": true,
            "bg-gray-200":searchParams.get('complated_todo') === "false",
            "bg-indigo-500 text-white": searchParams.get('complated_todo') === "true",
        })}>
            Tamamlanmış Todolar
        </button>
        <button
            onClick={() => todo_decomplated()}
            className={classNames({
                "h-7 rounded-xl px-4 text-xs": true,
                "bg-gray-200":  searchParams.get('decomplated_todo') === "false",
                "bg-indigo-500 text-white":searchParams.get('decomplated_todo') === "true",
            })}>
            Tamamlanmamış Todolar
        </button>
            </div>
    </div>
    )
}