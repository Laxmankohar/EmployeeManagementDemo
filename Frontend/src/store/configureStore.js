import {createStore, applyMiddleware, compose} from "redux"
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers/reduce.js'
import rootSaga from '../sagas'

const configureStore = () =>{
    const sagaMiddleware = createSagaMiddleware()

    const middlewares = [sagaMiddleware]

    const store = createStore(
        rootReducer,
        compose(applyMiddleware(...middlewares))
    )
    sagaMiddleware.run(rootSaga)
    return store

}
export default configureStore;