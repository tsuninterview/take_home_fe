import store from '../../store'
import { loadDemand } from '../../actionCreators'

const initialData = {
  demand: {},
  isLoadingCompleted: false,
}

export const ADD_DEMAND = 'add demand'

const demandReducer = (state = initialData, action) => {
  if (action.type === ADD_DEMAND) {
    return {
      ...state,
      demand: action.demand,
      isLoadingCompleted: true,
    }
  }
  return state
}

export const fetchDemand = () => {
  fetch(
    `/api/demand`
  )
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('invalid fetch')
      }
    })
    .then((data) => store.dispatch(loadDemand(data))
    )
    .catch((err) => console.log(err))
}

export default demandReducer
