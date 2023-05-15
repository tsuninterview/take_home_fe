import { combineReducers, createStore } from 'redux'
import productionReducer from './services/Production/production'
import demandReducer from './services/Demand/demand'

const rootReducer = combineReducers({
  productions: productionReducer,
  demands: demandReducer,
})
const store = createStore(rootReducer)

export default store
