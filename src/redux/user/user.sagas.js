//Google Sign in into sagas
import { takeLatest, put, all, call } from 'redux-saga/effects';
import userActionTypes from './user.types';
// import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';

//Recreating persistence 2nd time
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebase.utils';

// import { googleSignInSuccess, googleSignInFailure } from './user.actions';

// Email Sign in into Sagas
// import { googleSignInSuccess, googleSignInFailure, emailSignInSuccess, emailSignInFailure } from './user.actions';

// Sign Out With Sagas
// import { signInSuccess, signInFailure, signOutSuccess, signOutFailure } from './user.actions';

// Solution Sign Up Saga
import { signInSuccess, signInFailure, signOutSuccess, signOutFailure, signUpSuccess, signUpFailure } from './user.actions';

// reason for signInWithGoogle and signInWithEmail same code
// import { signInSuccess, signInFailure } from './user.actions';
// export function* getSnapshotFromUserAuth(userAuth) {
//     try {
//         const userRef = yield call(createUserProfileDocument, userAuth);
//         const userSnapshot = yield userRef.get();
//         yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))

//     } catch (error) {
//         yield put(signInFailure(error))
//     }
// };

// Solution Sign Up Saga
export function* getSnapshotFromUserAuth(userAuth, additionalData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalData);
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))

    } catch (error) {
        yield put(signInFailure(error))
    }
};

export function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);

    } catch (error) {
        yield put(signInFailure(error))
    }
};
export function* signInWithEmail({ payload: { email, password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password);
        yield getSnapshotFromUserAuth(user);

    } catch (error) {
        yield put(signInFailure(error))
    }
};

// trigger is the code related to sign out
export function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());

    } catch (error) {
        yield put(signOutFailure(error))
    }
};

// Solution Sign Up Saga  //{email, password, displayName} = userCredential
export function* signUp({ payload: { email, password, displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(
            email,
            password
        );
        yield put(signUpSuccess({ user, additionalData: { displayName } }));

    } catch (error) {
        yield put(signUpFailure(error))
    }
};
// Solution Sign Up Saga
export function* signInAfterSignUp({ payload: { user, additionalData } }) {
    yield getSnapshotFromUserAuth((user, additionalData))
};

// Code refatoring in Email Sign in into Sagas
// import { signInSuccess, signInFailure } from './user.actions';
// export function* signInWithGoogle() {
//     try {
//         const { user } = yield auth.signInWithPopup(googleProvider);
//         const userRef = yield call(createUserProfileDocument, user);
//         const userSnapshot = yield userRef.get();
//         yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))

//     } catch (error) {
//         yield put(signInFailure(error))
//     }
// };
// export function* signInWithEmail({ payload: { email, password } }) {
//     try {
//         const { user } = yield auth.signInWithEmailAndPassword(email, password);
//         const userRef = yield call(createUserProfileDocument, user);
//         const userSnapshot = yield userRef.get();
//         yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))

//     } catch (error) {
//         yield put(signInFailure(error))
//     }
// };

// trigger is the code related to sign in with google
// export function* signInWithGoogle() {
//     try {
//         const { user } = yield auth.signInWithPopup(googleProvider);
//         const userRef = yield call(createUserProfileDocument, user);
//         const userSnapshot = yield userRef.get();
//         yield put(googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))

//     } catch (error) {
//         yield put(googleSignInFailure(error))
//     }
// };

// trigger is the code related to Email Sign in
// export function* signInWithEmail({ payload: { email, password } }) {
//     try {
//         const { user } = yield auth.signInWithEmailAndPassword(email, password);
//         const userRef = yield call(createUserProfileDocument, user);
//         const userSnapshot = yield userRef.get();
//         yield put(emailSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))

//     } catch (error) {
//         yield put(emailSignInFailure(error))
//     }
// };

//Recreating persistence
export function* isUserAuthenticated() {
    //Recreating persistence 2nd time
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);

    } catch (error) {
        yield put(signInFailure(error))
    }
};

export function* onGoogleSignInStart() {
    yield takeLatest(userActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
};

// Email Sign in into Sagas
export function* onEmailSignInStart() {
    yield takeLatest(userActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
};

//Recreating persistence
export function* onCheckUserSession() {
    yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
};

// Sign Out With Sagas
export function* onSignOutStart() {
    yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
};

// Solution Sign Up Saga
export function* onSignUpStart() {
    yield takeLatest(userActionTypes.SIGN_UP_START, signUp)
};
// Solution Sign Up Saga
export function* onSignUpSuccess() {
    yield takeLatest(userActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
};
// Solution Sign Up Saga
export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(isUserAuthenticated),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
};

// Sign Out With Sagas
// export function* userSagas() {
//     yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(isUserAuthenticated), call(onSignOutStart)])
// };

//Recreating persistence 2nd time
// export function* userSagas() {
//     yield all([call(onGoogleSignInStart), call(onEmailSignInStart), call(isUserAuthenticated)])
// };

// after refatoring root-Saga.js
// export function* userSagas() {
//     yield all([call(onGoogleSignInStart), call(onEmailSignInStart)])
// };