import {  GET_ONE_DATA, GET_ONE_ERROR } from 'REDUX/constants/summaryConstants';

import * as Data from 'RESOURCES/data/Data.json';

const initialState = {
  oneData: {},
  errors: {}
};

const oneReducer = (state = initialState, action) => {
  const { type, payload, error } = action;

  if (error) return state;

  switch (type) {
    case GET_ONE_DATA:
      return {
        ...state,
        oneData: payload //Object.assign({}, { data: payload.data, loading: false, responseStatus: payload.status })
      };
       case GET_ERROR:
      return {
        ...state,
        errors: payload
      };
    default:
      return state;
  }
};

export default oneReducer;