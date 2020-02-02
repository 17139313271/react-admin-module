import { combineReducers } from "redux-immutable";

import { reducer as loginReducer } from "./global";

const reducer = combineReducers({
  login: loginReducer
});

export default reducer;
