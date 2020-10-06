import {SET_FIREBASE_MESSAGE_TOKEN, START_SPINNER, STOP_SPINNER, TEST_VAL} from "../actions/actionTypes";

let initialState = {
    isLoading: false,
    firebaseToken: '',
    testVal: ''
};

const configReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_SPINNER:
            return {...state, isLoading: true};
        case STOP_SPINNER:
            return {...state, isLoading: false};
        case TEST_VAL:
            return {...state, testVal: "Test"};
        case SET_FIREBASE_MESSAGE_TOKEN:
            return {...state, firebaseToken: action.data};
        default:
            return state;
    }
};

export default configReducer;
