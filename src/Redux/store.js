import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { monthTotalReducers, saveDaySaleReducers } from './baseReducer';

const reducer = combineReducers({
saveDaySale: saveDaySaleReducers,
monthTotal: monthTotalReducers
});

const initialState = {

};
const middleware = [ thunk ];

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
