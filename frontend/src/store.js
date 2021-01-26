import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { pageReducer } from "./reducers/pageReducers";

import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userProfileUpdateReducer,
  userListReducer,
  deleteUserReducer,
  userUpdateReducer,
} from "./reducers/userReducers";

const reducer = combineReducers({
  // user reducer
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userProfileUpdate: userProfileUpdateReducer,
  deleteUser: deleteUserReducer,
  userList: userListReducer,
  userUpdate: userUpdateReducer,

  // page reducer
  page: pageReducer,
});

const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const pageInfoFromLocalStorage = localStorage.getItem("pageInfo")
  ? JSON.parse(localStorage.getItem("pageInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromLocalStorage },
  page: { pageInfo: pageInfoFromLocalStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
