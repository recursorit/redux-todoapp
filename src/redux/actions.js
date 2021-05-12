export const ADD_TODO = 'ADD_TODO'
export const EDIT_TODO = 'EDIT_TODO'
export const DELETE_TODO = 'DELETE_TODO'
export const MODAL_OPEN = 'MODAL_OPEN'
export const MODAL_CLOSE = 'MODAL_CLOSE'

export function addTodo(todo) {
    return {
        type: 'ADD_TODO',
        payload: todo
    }
}
export function editTodo(todo) {
    return {
        type: 'EDIT_TODO',
        payload: todo
    }
}
export function deleteTodo(todoId) {
    return {
        type: 'DELETE_TODO',
        payload: todoId
    }
}
export function openmodal(todoId) {
    return {
        type: 'MODAL_OPEN',
        payload: todoId
    }
}
export function closemodal() {
    return {
        type: 'MODAL_CLOSE'
    }
}