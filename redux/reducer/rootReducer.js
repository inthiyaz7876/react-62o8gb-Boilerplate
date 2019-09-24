import { combineReducers } from 'redux';
import summary from 'REDUX/reducers/summaryReducer';

const rootReducer = combineReducers({
  summary,
});

export default rootReducer;
