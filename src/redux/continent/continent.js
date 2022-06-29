import axios from 'axios';

const LOAD = 'COVID-METRICS/CONTINENT/LOAD';

const initialState = JSON.parse(localStorage.getItem('content'));

export default function reducer(state = initialState, action) {
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

export const loadContent = () => (dispatch, _, BASE_URL) => axios.get(`${BASE_URL}/cases`).then(
  (response) => {
    localStorage.setItem('content', JSON.stringify(response.data));
    dispatch({ type: LOAD, payload: response.data });
  },
);
