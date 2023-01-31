import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { rootReducer } from './reducers'
import { customLoggerMiddleware } from '../middlewares/customLoggerMiddleware'
import { checkRoleMiddleware } from '../middlewares/checkRoleMiddleware'

let middleware = applyMiddleware(thunk, customLoggerMiddleware, checkRoleMiddleware)

export const store = createStore(rootReducer, middleware)
