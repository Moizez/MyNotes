import { combineReducers } from 'redux'
import NotesReducers from './NotesReducers'

export default combineReducers({
    notes: NotesReducers
})