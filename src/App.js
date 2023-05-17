// useEffect in our App
import React, { useEffect } from 'react';

// import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//user selector
import { createStructuredSelector } from 'reselect';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

//reason for checkout page
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

// Because now saga is handling setting our current user on success
// import { auth, createUserProfileDocument } from './firebase/firebase.utils';
// import { setCurrentUser } from './redux/user/user.actions';

//user selector
import { selectCurrentUser } from './redux/user/user.selectors';

//Recreating persistence
import { checkUserSession } from './redux/user/user.actions';

// useEffect in our App
const App = ({ checkUserSession, currentUser }) => {
  // unsubscribeFromAuth = null;

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (

    <div>
      {/* Reason for redux set-up */}
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />

        <Route exact path='/signin' render={() => currentUser ?
          (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
      </Switch>
    </div>
  )
}


// class App extends React.Component {
//   unsubscribeFromAuth = null;

//   //Recreating persistence
//   componentDidMount() {
//     const { checkUserSession } = this.props;
//     checkUserSession()
//   };

//   // componentDidMount() {
//   //Reason for redux
//   // const { setCurrentUser } = this.props;  // // Because now saga is handling setting our current user on success

//   // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
//   //   // createUserProfileDocument(user);

//   //   if (userAuth) {
//   //     const userRef = await createUserProfileDocument(userAuth);

//   //     userRef.onSnapshot(snapShot => {
//   //       //Reason for redux set-up
//   //       setCurrentUser({
//   //         id: snapShot.id,
//   //         ...snapShot.data()
//   //       })
//   //     });
//   //   }
//   // });  //Rason for Google Sign in into sagas
//   // }

//   componentWillUnmount() {
//     this.unsubscribeFromAuth()
//   }

//   render() {
//     return (

//       <div>
//         {/* Reason for redux set-up */}
//         <Header />
//         <Switch>
//           <Route exact path='/' component={HomePage} />
//           <Route path='/shop' component={ShopPage} />
//           <Route exact path='/checkout' component={CheckoutPage} />

//           <Route exact path='/signin' render={() => this.props.currentUser ?
//             (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
//         </Switch>
//       </div>
//     )
//   }

// }

//user selector
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

//Recreating persistence
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

//redux set-up 
// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// });  // Because now saga is handling setting our current user on success

// Because now saga is handling setting our current user on success
// export default connect(mapStateToProps, mapDispatchToProps)(App);

// Email Sign in into Sagas
// export default connect(mapStateToProps)(App);

