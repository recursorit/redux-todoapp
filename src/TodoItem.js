import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import {  editTodo, openmodal } from './redux/actions'
function TodoItem({ todo }) {
    const dispatch = useDispatch()
    const [editable, setEditable] = useState(false)
    const [name, setName] = useState(todo.name)
    return (
        <tr>
            <td className='text-center mt-5'>{todo.id}.</td>
            {editable ? <input autoFocus type="text" className="form-control"
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }} /> : <td className='text-center mt-5'>{todo.name}</td>}
            <td className='text-center'>
            {editable ?  <Button onClick={() => {
                    dispatch(editTodo({
                        ...todo,
                        name: name
                    }))
                    if (editable) {
                        setName(todo.name);
                    }
                    setEditable(!editable);
                }}
                    className='btn-sm px-3 mx-2 btn-success'>
        Save
                </Button>:<Button onClick={() => {
                    dispatch(editTodo({
                        ...todo,
                        name: name
                    }))
                    if (editable) {
                        setName(todo.name);
                    }
                    setEditable(!editable);
                }}
                    className='btn-sm px-3 mx-2'>
        Edit
                </Button>}
                <Button onClick={() => dispatch(openmodal(todo.id))} className='btn-sm btn-danger m-2'>Delete</Button>
            </td>
        </tr>




    )
}

export default TodoItem
