import React from 'react';

// Solution Sign Up Saga
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

// Solution Sign Up Saga
import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        // Solution Sign Up Saga
        const { signUpStart } = this.props;

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        // Solution Sign Up Saga
        signUpStart({ displayName, email, password })

        // we don't need for try catch block, because of Solution Sign Up Saga
        // try {
        //     const { user } = await auth.createUserWithEmailAndPassword(
        //         email,
        //         password
        //     );

        //     await createUserProfileDocument(user, { displayName });

        // we don't need this.setState anymore because we're signing in our user(Solution Sign Up Saga)
        // this.setState({
        //     displayName: '',
        //     email: '',
        //     password: '',
        //     confirmPassword: ''
        // });

        // } catch (error) {
        //     console.error(error);
        // }
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <SignUpContainer>
                <SignUpTitle>I do not have a account</SignUpTitle>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </SignUpContainer>
        );
    }
}

// Solution Sign Up Saga
const mapDispatchToProps = dispatch => ({
    signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});
// Solution Sign Up Saga
export default connect(null, mapDispatchToProps)(SignUp);

// export default SignUp;