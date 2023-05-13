import { ADD_PRODUCTIONS } from "./services/Production/production"
import { ADD_DEMANDS } from "./services/Demand/demand"

export function loadProductions(data) {
    return {
      type: ADD_PRODUCTIONS,
      productions: data
    }
  }
  
  export function loadDemands(data) {
    return {
      type: ADD_DEMANDS,
      demands: data
    }
  }
  