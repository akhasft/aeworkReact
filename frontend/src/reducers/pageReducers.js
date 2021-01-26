import {
  PAGE_DETAILS_REQUEST,
  PAGE_DETAILS_SUCCESS,
  PAGE_DETAILS_FAIL,
} from "../constants/pageConstants";

export const pageReducer = (state = {}, action) => {
  switch (action.type) {
    case PAGE_DETAILS_REQUEST:
      return { loading: true, pageInfo: [] };
    case PAGE_DETAILS_SUCCESS:
      return { loading: false, success: true, pageInfo: action.payload };
    case PAGE_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
