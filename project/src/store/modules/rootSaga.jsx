import { all } from "redux-saga/effects";
import saga from "./cart/saga";

export default function* rootSaga() {
  return yield all([saga]);
}
