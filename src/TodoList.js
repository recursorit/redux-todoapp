import React from 'react'
import { Row, Col, Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
function TodoList() {
    const todos = useSelector(state => state)
    return (
        <>
            <Row className='justify-content-center mt-5'>
                <Col xs={12} md={8} lg={8}>
                    <h2 className='text-center text-info mb-3'>Todo List</h2>
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th className='text-center'>SrNo.</th>
                                <th className='text-center'>Todo</th>
                                <th className=' text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                todos.map(todo => {
                                    return <TodoItem key={todo.id} todo={todo} />
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </>
    )
}

export default TodoList
