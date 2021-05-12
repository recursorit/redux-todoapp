import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer } from './reducer'
import { modalReducer } from "./modalReducer";
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
    initialState: reducer,
    modals: modalReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))