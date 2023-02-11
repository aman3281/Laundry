import { FETCH_ALL, CREATE } from "../constants/actionTypes";

import * as api from "../api/index.js";

export const getLaundry = () => async (dispatch) => {
  try {
    const { data } = await api.getLaundry();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createLaundry = (post) => async (dispatch) => {
  try {
    const { data } = await api.createLaundry(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
