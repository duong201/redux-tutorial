export const ADDTODO = (data) => {
  return {
    type: 'todoList/addTodo',
    payload: data,
  }
}

export const TOOGLETODOSTATUS = (todoId) => {
  return {
    type: 'todoList/toogleTodoStatus',
    payload: todoId,
  }
}

export const SEARCHFILTERCHANGE = (text) => {
  return {
    type: 'filters/searchFilterChange',
    payload: text,
  }
}

export const STATUSFILTERCHANGE = (status) => {
  return {
    type: 'filters/statusFilterChange',
    payload: status,
  }
}

export const PRIORIRYFILTERCHANGE = (priorities) => {
  return {
    type: 'filters/priorityFilterChange',
    payload: priorities,
  }
}
