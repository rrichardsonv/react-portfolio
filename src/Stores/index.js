import { combineReducers } from 'redux'
import { modals, sections } from './reducers'

const rootReducer = combineReducers({
  modals,
  sections
})

export default rootReducer
