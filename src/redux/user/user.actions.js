// import { userActionTypes } from "./user.types"; //Reason for google Sign in into sagas

// Google Sign in into sagas
import userActionTypes from "./user.types";

// Reason for user.sagas.js (signInWithgoogle and signInWithEmail)
// export const setCurrentUser = user => ({
//     // type: 'SET_CURRENT_USER';

//     type: userActionTypes.SET_CURRENT_USER,
//     payload: user
// });

// Google Sign in into sagas
export const googleSignInStart = () => ({
    type: userActionTypes.GOOGLE_SIGN_IN_START
});

// Reason for user.sagas.js (signInWithgoogle and signInWithEmail)
// export const googleSignInSuccess = (user) => ({
//     type: userActionTypes.GOOGLE_SIGN_IN_SUCCESS,
//     payload: user
// });

// export const googleSignInFailure = error => ({
//     type: userActionTypes.GOOGLE_SIGN_IN_FAILURE,
//     payload: error
// });

export const emailSignInStart = emailAndPassword => ({
    type: userActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
});

// Reason for user.sagas.js (signInWithgoogle and signInWithEmail)
// export const emailSignInSuccess = (user) => ({
//     type: userActionTypes.EMAIL_SIGN_IN_SUCCESS,
//     payload: user
// });

// export const emailSignInFailure = error => ({
//     type: userActionTypes.EMAIL_SIGN_IN_FAILURE,
//     payload: error
// });

//Email Sign in inti Sagas
export const signInSuccess = (user) => ({
    type: userActionTypes.SIGN_IN_SUCCESS,
    payload: user
});

export const signInFailure = error => ({
    type: userActionTypes.SIGN_IN_FAILURE,
    payload: error
});

//Recreating persistence
export const checkUserSession = () => ({
    type: userActionTypes.CHECK_USER_SESSION
});

// Sign Out with Sagas
export const signOutStart = () => ({
    type: userActionTypes.SIGN_OUT_START
});
export const signOutSuccess = () => ({
    type: userActionTypes.SIGN_OUT_SUCCESS
});
export const signOutFailure = (error) => ({
    type: userActionTypes.SIGN_OUT_FAILURE,
    payload: error
});

// Solution Sign Up Saga
export const signUpStart = userCredentials => ({
    type: userActionTypes.SIGN_UP_START,
    payload: userCredentials
});
// Solution Sign Up Saga
export const signUpSuccess = ({ user, additionalData }) => ({
    type: userActionTypes.SIGN_UP_SUCCESS,
    payload: { user, additionalData }
});
// Solution Sign Up Saga
export const signUpFailure = error => ({
    type: userActionTypes.SIGN_UP_FAILURE,
    payload: error
});
