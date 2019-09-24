import store from 'REDUX/store';
import * as C from 'REDUX/constants/summaryConstants';


const getStateKey = val => {    
  return store.getState().data[val];
};
  
const setServer = () => {
  return ApiHost;
};

const setQuery = params => {
  return `type=${params.startDate}&endDate=${params.endDate}`;
};


export const setSelectedItem = val => ({
  payload: val,
  type: C.SET_SELECTED_ITEM
})



export const getOneData = (params) => {
  const _url = `${setServer()}${Data}?${setQuery(params)}`;
  const _stateKey = getStateKey('oneData');

  return (dispatch) => {
    dispatch(setLoading(_stateKey));
    req.get(`${_url}`)
    .then(({ body }) => dispatch({
      type: C.GET_DATA,
      payload: body
    }))
    .catch(err => {
      dispatch({
        type: C.GET_ONE_ERROR,
        payload: err
      });
    });
  };
}