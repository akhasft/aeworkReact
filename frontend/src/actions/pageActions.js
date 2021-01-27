import {
  PAGE_DETAILS_REQUEST,
  PAGE_DETAILS_SUCCESS,
  PAGE_DETAILS_FAIL,
  PAGE_UPDATE_REQUEST,
  PAGE_UPDATE_SUCCESS,
  PAGE_UPDATE_FAIL,
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

export const updatePage = (page) => async (dispatch, getState) => {
  const id = "600b044a943b350524628f89";
  console.log(page);
  try {
    dispatch({ type: PAGE_UPDATE_REQUEST });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(`/api/page/${id}`, page, config);

    dispatch({ type: PAGE_UPDATE_SUCCESS });
  } catch (error) {
    dispatch({
      type: PAGE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
