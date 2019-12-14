import {combineReducers} from 'redux';
import courseList from './course_reducer'
import enquiry from './enquiry_reducer'

const rootReducer = combineReducers({
    courseList,enquiry
})

export default rootReducer;