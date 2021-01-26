import {
  PAGE_DETAILS_REQUEST,
  PAGE_DETAILS_SUCCESS,
  PAGE_DETAILS_FAIL,
} from "../constants/pageConstants";
import axios from "axios";
export const loadPage = () => async (dispatch) => {
  const id = "600b044a943b350524628f89";
  try {
    dispatch({ type: PAGE_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/page/${id}`);

    dispatch({
      type: PAGE_DETAILS_SUCCESS,
      payload: data,
    });
    localStorage.setItem("pageInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: PAGE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
