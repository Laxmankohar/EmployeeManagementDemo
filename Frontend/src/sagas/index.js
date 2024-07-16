import { all } from "redux-saga/effects";
import employeeSagas from "./employeeSagas";

function* rootSaga() {
  yield all([employeeSagas()]);
}

export default rootSaga;