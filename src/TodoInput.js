import React, { useState } from 'react'
import { Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap'
import { addTodo } from './redux/actions'
import { useSelector, useDispatch } from 'react-redux'
function TodoInput() {
    const [name, setName] = useState()
    const dispatch = useDispatch()
    const todos = useSelector(state => state.initialState)
    let id = todos.length + 1
    return (
        <Row className='justify-content-center mt-5'>
            <Col xs={12} md={5} lg={5} >
                <h2 className='text-primary text-center'>Todo Input</h2>
                <InputGroup className="mb-3">
                    <FormControl autoFocus
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Add your todo here."
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button onClick={() => {
                            dispatch(addTodo(
                                {
                                    id: id,
                                    name: name
                                }
                            ))
                            setName('')
                        }} className='btn-primary'
                            disabled={!name}>Add</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Col>
        </Row>
    )
}

export default TodoInput
