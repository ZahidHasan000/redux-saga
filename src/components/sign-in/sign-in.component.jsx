import React from 'react';

//Google Sign in into Sagas
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// reason for Email Sign in into Sagas
// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

//Google Sign in into Sagas
// import { googleSignInStart } from '../../redux/user/user.actions';

// Email Sign in into Sagas
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import {
    SignInContainer,
    SignInTitle,
    ButtonsBarContainer
} from './sign-in.styles';
import { onGoogleSignInWithStart } from '../../redux/user/user.sagas';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        // Email Sign in into Sagas
        const { emailSignInStart } = this.props;

        const { email, password } = this.state;

        // reason for Email Sign in into Sagas
        // try {
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({ email: '', password: '' });
        // } catch (error) {
        //     console.log(error);
        // }

        // Email Sign in into Sagas
        emailSignInStart(email, password)
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {

        //Google Sign in into Sagas
        const { googleSignInStart } = this.props;

        return (
            <SignInContainer>
                <SignInTitle>I already have an account</SignInTitle>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />
                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label='password'
                        required
                    />
                    <ButtonsBarContainer>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        {/* <CustomButton onClick={signInWithGoogle} isGoogleSignIn> */}

                        {/* //Google Sign in into Sagas */}
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </ButtonsBarContainer>
                </form>
            </SignInContainer>
        );
    }
}
// export default SignIn;

//Google Sign in into Sagas
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),

    // Email Sign in into Sagas
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);