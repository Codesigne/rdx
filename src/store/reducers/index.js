import { combineReducers } from "redux"
import list from './reducers_list'
import filters from './reducers_filters'

let rootReducer = combineReducers({
    list,
    filters
})
export default rootReducer;