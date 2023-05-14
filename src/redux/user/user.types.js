// export const userActionTypes = { //Reason for Google Sign in into sagas

const userActionTypes = {
    SET_CURRENT_USER: 'SET_CURRENT_USER',

    //Google Sign in into sagas
    // GOOGLE_SIGN_IN_START: 'GOOGLE_SIGN_IN_START',
    // GOOGLE_SIGN_IN_SUCCESS: 'GOOGLE_SIGN_IN_SUCCESS',
    // GOOGLE_SIGN_IN_FAILURE: 'GOOGLE_SIGN_IN_FAILURE',
    // EMAIL_SIGN_IN_START: 'EMAIL_SIGN_IN_START',
    // EMAIL_SIGN_IN_SUCCESS: 'EMAIL_SIGN_IN_SUCCESS',
    // EMAIL_SIGN_IN_FAILURE: 'EMAIL_SIGN_IN_FAILURE' // Reason for user.sagas.js (signInWithgoogle and signInWithEmail)

    //Email Sign in into Sagas
    GOOGLE_SIGN_IN_START: 'GOOGLE_SIGN_IN_START',
    EMAIL_SIGN_IN_START: 'EMAIL_SIGN_IN_START',
    SIGN_IN_SUCCESS: 'SIGN_IN_SUCCESS',
    SIGN_IN_FAILURE: 'SIGN_IN_FAILURE',

    //Recreating persistence
    CHECK_USER_SESSION: 'CHECK_USER_SESSION',

    // Sign Out with Sagas
    SIGN_OUT_START: 'SIGN_OUT_START',
    SIGN_OUT_SUCCESS: 'SIGN_OUT_SUCCESS',
    SIGN_OUT_FAILURE: 'SIGN_OUT_FAILURE',

    // Solution Sign Up Saga
    SIGN_UP_START: 'SIGN_UP_START',
    SIGN_UP_SUCCESS: 'SIGN_UP_SUCCESS',
    SIGN_UP_FAILURE: 'SIGN_UP_FAILURE'

};

//Google Sign in into sagas
export default userActionTypes;