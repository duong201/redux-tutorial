import { combineReducers } from 'redux'
import filtersSlice from '../components/Filters/FiltersSlice'
import todoListSlice from '../components/TodoList/TodoListSlice'

const rootReducer = combineReducers({
  filters: filtersSlice.reducer,
  todoList: todoListSlice.reducer,
})

export default rootReducer
