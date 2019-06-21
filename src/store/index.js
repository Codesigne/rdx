import {createStore} from 'redux'
import rootReducer from "./reducers/"
let store = createStore(
    // ()=>{ return {asd:"afafasf"} },
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
) 
export default store