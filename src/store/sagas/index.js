import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_IMAGES_REQUEST, fetchImagesSuccess } from "../actions/images";

function* fetchImagesSaga() {
  try {
    const response = yield call(
      fetch,
      "https://picsum.photos/v2/list?page=1&limit=9"
    );
    const images = yield response.json();
    yield put(fetchImagesSuccess(images));
  } catch (e) {
    console.error(e);
  }
}

function* rootSaga() {
  yield takeEvery(FETCH_IMAGES_REQUEST, fetchImagesSaga);
}
export default rootSaga;
