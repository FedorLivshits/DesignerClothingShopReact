import {combineReducers, compose, createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import mainReducer from './main-reducer'

let reducers = combineReducers({
    mainReducer,
})

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))


export default store