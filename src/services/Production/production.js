import store from '../../store'
import { loadProductions } from '../../actionCreators'

export const initialData = {
  productions: {},
  isLoadingCompleted: false,
}

export const ADD_PRODUCTIONS = 'add productions'

const productionReducer = (state = initialData, action) => {
  if (action.type === ADD_PRODUCTIONS) {
    return {
      ...state,
      productions: action.productions,
      isLoadingCompleted: true,
    }
  }
  return state
}

export const fetchProduction = () => {
  fetch(
    `https://www.hydroquebec.com/data/documents-donnees/donnees-ouvertes/json/production.json`
  )
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('invalid fetch')
      }
    })
    .then((data) => store.dispatch(loadProductions(data)))
    .catch((err) => console.log(err))
}

export default productionReducer
