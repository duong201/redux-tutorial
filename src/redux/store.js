// import { createStore } from 'redux'
// import rootReducer from './reducer'
// import { composeWithDevTools } from 'redux-devtools-extension'

// const composeEhencers = composeWithDevTools()

// const store = createStore(rootReducer, composeEhencers)

// export default store

import { configureStore } from '@reduxjs/toolkit'
import filtersSlice from '../components/Filters/FiltersSlice'
import todoListSlice from '../components/TodoList/TodoListSlice'

const store = configureStore({
  reducer: {
    filters: filtersSlice.reducer,
    todoList: todoListSlice.reducer,
  },
})

export default store
