import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Continent from './continent/continent';
import Country from './country/country';

const BASE_URL = 'https://covid-api.mmediagroup.fr/v1';

const rootReducer = combineReducers({
  Continent,
  Country,
});

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk.withExtraArgument(BASE_URL), logger),
));

export default store;
