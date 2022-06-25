
export default function reducer(state,action)  {
    switch(action.type) {
      case 'UPDATE_TODO' : 
      return {
        ...state,
        todo:action.value
      }
      case 'INSERT_TODO': 
      let random = Math.floor(Math.random() * 1000000000 + 1)
      return {
        todo: '',
        todos:[
          {
            id:random,
            title:action.todo,
            complated:false,
            userId: action.userId,
            anonymous:state.anonymous
          },
          ...state.todos
        ]
      }

      case 'DELETE_TODO': 
      return {
        ...state,
        todos:[
          ...state.todos.filter((todo) => todo.id !== action.id)
        ]
      }

      case 'COMPALTED_TODO': 
      return {
        ...state,
        todos:[
          ...state.todos.map((todo) => {
            if(todo.id === action.id) {
              todo.complated = !todo.complated
            }
            return todo
          })
        ]
      }


      case 'UPDATETODOITEM_TODO': 
      return {
        ...state,
        todos:[
          ...state.todos.map((todo) => {
            if(todo.id === action.id) {
              todo.title = action.value
            }
            return todo
          })
        ]
      }

      case 'ANON_VALİD':
        return {
          ...state,
          anonymous: action.value
        }
    }
}