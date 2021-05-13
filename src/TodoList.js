import React from "react";
import { Row, Col, Table, Modal, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import TodoItem from "./TodoItem";
import { deleteTodo, closemodal } from "./redux/actions";
function TodoList() {
  const todos = useSelector((state) => state.initialState);
  const dispatch = useDispatch();
  const modal = useSelector((state) => state.modals.modal);
  const mid = useSelector((state) => state.modals.mid);

  return (
    <>
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={8} lg={8}>
          <h2 className="text-center text-info mb-3">Todo List</h2>
          <Table striped bordered>
            {todos[0] ? (
              <thead>
                <tr>
                  <th className="text-center">SrNo.</th>
                  <th className="text-center">Todo</th>
                  <th className=" text-center">Action</th>
                </tr>
              </thead>
            ) : null}
            <tbody>
              {todos.map((todo) => {
                return <TodoItem key={todo.id} todo={todo} />;
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
      <Modal show={modal} onHide={() => dispatch(closemodal())}>
        <Modal.Header>
          <Modal.Title>Confirm Action</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want delete this record?</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => dispatch(closemodal())}>
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              dispatch(deleteTodo(mid));
              dispatch(closemodal());
            }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TodoList;
