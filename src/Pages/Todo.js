import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, deleteTodo, editTodo } from '../toolkitReducers/todos-slice-builder';

export default function Todo() {
  const dispatch = useDispatch()

  const todos = useSelector(state => {
    return state.todos.list
  })

  useEffect(() => {
    dispatch(fetchTodos('this param'))
  }, [])

  const deleteTodoHandler = (id) => () => {
    dispatch(deleteTodo(id))
  }

  const editTodoHandler = (id) => () => {
    dispatch(editTodo(id))
  }

  return (
    <div>Todo
      {
        todos &&
          todos.map(value =>
            <div key={value.id} style={{textDecoration: value.completed && 'line-through'}}>
              {value.title}
              <span
                style={{color: 'green', cursor: "pointer"}}
                onClick={editTodoHandler(value.id)}>Edit</span>
              <span
                style={{color: 'red', cursor: "pointer"}}
                onClick={deleteTodoHandler(value.id)}>X</span>
            </div>
          )
      }
    </div>
  )
}
