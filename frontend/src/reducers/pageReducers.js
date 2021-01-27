import {
  PAGE_DETAILS_REQUEST,
  PAGE_DETAILS_SUCCESS,
  PAGE_DETAILS_FAIL,
  PAGE_UPDATE_REQUEST,
  PAGE_UPDATE_SUCCESS,
  PAGE_UPDATE_FAIL,
  PAGE_UPDATE_RESET,
} from "../constants/pageConstants";

export const pageReducer = (state = {}, action) => {
  switch (action.type) {
    case PAGE_DETAILS_REQUEST:
      return { loading: true, pageInfo: [] };
    case PAGE_DETAILS_SUCCESS:
      return { loading: false, pageInfo: action.payload };
    case PAGE_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const pageUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case PAGE_UPDATE_REQUEST:
      return { loading: true };
    case PAGE_UPDATE_SUCCESS:
      return { loading: false, success: true, pageInfo: action.payload };
    case PAGE_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PAGE_UPDATE_RESET:
      return {};

    default:
      return state;
  }
};
