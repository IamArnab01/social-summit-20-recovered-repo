import authReducer from "./authReducer";
import munReducer from "./munReducer";
import participantReducer from "./participantReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  mun: munReducer,
  participant: participantReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
