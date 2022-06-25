import {useField} from "formik"

const Input = ({label, ...props}) => {

  const[fields,meta,helpers] = useField(props)

  return(
    <label>
        <p className="py-2">{label}</p>
        <input {...fields} {...props} className="flex-1 w-[300px] border border-gray-700 rounded-2xl p-2 "  />
    </label>
  )

}

export default Input