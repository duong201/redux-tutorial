import React, { useState } from 'react'
import { Row, Tag, Checkbox } from 'antd'
import { useDispatch } from 'react-redux'
import todoListSlice from '../TodoList/TodoListSlice'

const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
}

const Todo = ({ name, prioriry, completed, id }) => {
  const [checked, setChecked] = useState(completed)
  const dispatch = useDispatch()

  const toggleCheckbox = () => {
    setChecked(!checked)
    dispatch(todoListSlice.actions.toogleTodoStatus(id))
  }

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColorMapping[prioriry]} style={{ margin: 0 }}>
        {prioriry}
      </Tag>
    </Row>
  )
}

export default Todo
