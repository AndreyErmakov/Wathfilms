import { createStore, applyMiddleware } from 'redux'
import { rootReducer } from '../reducers'
import thunk from 'redux-thunk'
import { composeWhithDevTools } from 'redux-devtools-extension'
// удалили "начальное состояние = initial state"
// так как теперь наш редьюсер составной,
// и нам нужны initialState каждого редьюсера.
// Это будет сделано автоматически.
export const store = createStore(rootReducer, composeWhithDevTools(applyMiddleware(thunk)))