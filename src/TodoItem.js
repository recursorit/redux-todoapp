import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTodo, editTodo } from './redux/actions'
function TodoItem({ todo }) {
    const dispatch = useDispatch()
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name)
    return (
        <tr>
            <td className='text-center'>{todo.id}</td>
            {editable ? <input autoFocus type="text" className="form-control"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }} /> : <td className='text-center'>{todo.name}</td>}
            <td className='text-center'>
                <Button onClick={() => {
                    dispatch(editTodo({
                        ...todo,
                        name: name
                    }))
                    if (editable) {
                        setName(todo.name);
                    }
                    setEditable(!editable);
                }}
                    className='btn-sm px-3 m-2'>
                    {editable ? 'Save' : 'Edit'}
                </Button>
                <Button onClick={() => dispatch(deleteTodo(todo.id))} className='btn-sm btn-danger m-2'>Delete</Button>
            </td>
        </tr>
    )
}

export default TodoItem
