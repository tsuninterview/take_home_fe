import { ADD_PRODUCTION } from './services/Production/production'
import { ADD_DEMAND } from './services/Demand/demand'

export function loadProduction(data) {
  return {
    type: ADD_PRODUCTION,
    production: data,
  }
}

export function loadDemand(data) {
  return {
    type: ADD_DEMAND,
    demand: data,
  }
}
