
export default function reducer(state,action)  {
    switch(action.type) {
      case 'UPDATE_TODO' : 
      return {
        ...state,
        todo:action.value
      }
      case 'INSERT_TODO': 
      return {
        ...state,
        todo: '',
        todos:[
          {
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
          ...state.todos.filter((todo,index) => index !== action.index)
        ]
      }
      case 'ONLYME_CHANGE_TODO' : 
      return {
        ...state,
        TodoOnlyMe:!state.TodoOnlyMe
      }


      case 'COMPALTED_TODO': 
      return {
        ...state,
        todos:[
          ...state.todos.map((todo,index) => {
            if(index === action.index) {
              todo.complated = !todo.complated
            }
            return todo
          })
        ]
      }


      case 'TODO_FILTER_COMPLETED':
			return {
				...state,
				FilterTodo: action.value
			}

      case 'UPDATETODOITEM_TODO': 
      return {
        ...state,
        todos:[
          ...state.todos.map((todo,index) => {
            if(index === action.index) {
              todo.title = action.value
            }
            return todo
          })
        ]
      }

      case 'SEARCH_TODO' : 
      return {
        ...state,
        TodosSearch:action.value
      }

      case 'ANON_VALİD':
        return {
          ...state,
          anonymous: action.value
        }
    }
}