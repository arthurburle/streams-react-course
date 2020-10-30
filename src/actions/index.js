import streams from "../apis/streams";
import history from "../history";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
} from "../actions/types";
import { streamsFakeAPI } from "../db";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => (dispatch, getState) => {
  //  const { userId } = getState().auth;
  //  const response = await streams.post("/streams", { ...formValues, userId });

  dispatch({ type: CREATE_STREAM, payload: streamsFakeAPI });

  history.push("/");
};

export const fetchStreams = () => (dispatch) => {
  // const response = await streams.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: streamsFakeAPI });
};

export const fetchStream = (id) => (dispatch) => {
  //  const response = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: streamsFakeAPI });
};

export const editStream = (id, formValues) => (dispatch) => {
  //  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: streamsFakeAPI });

  history.push("/");
};

export const deleteStream = (id) => (dispatch) => {
  //  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
  history.push("/");
};
