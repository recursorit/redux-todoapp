import { MODAL_OPEN, MODAL_CLOSE } from './actions'


const modal = {
    modal: false,
    mid: 0
}
export const modalReducer = (state = modal, action) => {
    switch (action.type) {
        case MODAL_OPEN:
            return {
                ...state,
                modal: true,
                mid: action.payload
            }
        case MODAL_CLOSE:
            return {
                ...state,
                modal: false
            }
        default: return state
    }
}