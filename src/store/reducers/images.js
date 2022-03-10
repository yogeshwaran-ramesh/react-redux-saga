import { FETCH_IMAGES_SUCCESS, FETCH_IMAGES_REQUEST } from "../actions/images";

const imagesReducer = (state = { images: [], loading: false }, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        loading: false,
        images: action.images,
      };

    case FETCH_IMAGES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default imagesReducer;
