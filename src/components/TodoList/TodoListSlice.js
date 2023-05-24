// const initState = [
//   { id: 1, name: 'Learn HTML, CSS', completed: true, priority: 'Medium' },
//   { id: 2, name: 'Learn JavaScript', completed: true, priority: 'High' },
//   { id: 3, name: 'Learn React', completed: false, priority: 'Low' },
// ]

// const TodoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'todoList/addTodo':
//       return [...state, action.payload]

//     case 'todoList/toogleTodoStatus':
//       return state.map((todo) =>
//         todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo,
//       )

//     default:
//       return state
//   }
// }

// export default TodoListReducer

import { createSlice } from '@reduxjs/toolkit'

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: [
    { id: 1, name: 'Learn HTML, CSS', completed: true, priority: 'Medium' },
    { id: 2, name: 'Learn JavaScript', completed: true, priority: 'High' },
    { id: 3, name: 'Learn React', completed: false, priority: 'Low' },
  ],
  reducers: {
    addTodo: (state, action) => {
      // mutation || IMMER
      state.push(action.payload)
    }, // => {type: 'filters/searchFilterChange'}
    toogleTodoStatus: (state, action) => {
      const currentTodo = state.filter((todo) => todo.id === action.payload)
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed
      }
    },
  },
})

export default todoListSlice
