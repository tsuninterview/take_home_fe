import { ADD_PRODUCTION } from './services/Production/production'
import { ADD_DEMAND } from './services/Demand/demand'
/**
 * action creator for adding production
 */
export function loadProduction(data) {
  return {
    type: ADD_PRODUCTION,
    production: data,
  }
}

/**
 * action creator for adding demand
 */
export function loadDemand(data) {
  return {
    type: ADD_DEMAND,
    demand: data,
  }
}
