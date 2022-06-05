import { getPost } from "../Post/getPost";

const initalAppLoadingFetchPost = () => {
  return async (dispatch) => {
    dispatch(getPost());
  };
};

export { initalAppLoadingFetchPost };
