import axios from 'axios';

const LOAD = 'COVID-METRICS/COUNTRY/LOAD';

// let initialState;

export default function reducer(state = {}, action) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export const loadCountry = (continent) => (dispatch, _, BASE_URL) => axios.get(`${BASE_URL}/cases?continent=${continent}`).then(
  (response) => {
    // initialState = JSON.parse(localStorage.getItem(`${continent}`));
    localStorage.setItem(`${continent}`, JSON.stringify(response.data));
    dispatch({ type: LOAD, payload: response.data });
  },
);
