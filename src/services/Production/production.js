import store from '../../store'
import { loadProduction } from '../../actionCreators'

export const initialData = {
  production: {},
  isLoadingCompleted: false,
}

export const ADD_PRODUCTION = 'add production'

const productionReducer = (state = initialData, action) => {
  if (action.type === ADD_PRODUCTION) {
    return {
      ...state,
      production: action.production,
      isLoadingCompleted: true,
    }
  }
  return state
}

export const fetchProduction = () => {
  fetch(
    `/api/production`
  )
    .then((res) => {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error('invalid fetch')
      }
    })
    .then((data) => store.dispatch(loadProduction(data)))
    .catch((err) => console.log(err))
}

export default productionReducer
