import {SET_FIREBASE_MESSAGE_TOKEN, START_SPINNER, STOP_SPINNER, TEST_VAL} from "./actionTypes";

export const startSpinner = () => ({type: START_SPINNER});

export const stopSpinner = () => ({type: STOP_SPINNER});

export const setValue = () => ({type: TEST_VAL});

export const setFirebaseToken = data => ({type: SET_FIREBASE_MESSAGE_TOKEN, data});
