export const FETCH_IMAGES_REQUEST = "FETCH_IMAGES_REQUEST";
export const FETCH_IMAGES_SUCCESS = "FETCH_IMAGES_SUCCESS";

export const fetchImages = () => ({
  type: FETCH_IMAGES_REQUEST,
});
export const fetchImagesSuccess = (images) => ({
  type: FETCH_IMAGES_SUCCESS,
  images,
});
