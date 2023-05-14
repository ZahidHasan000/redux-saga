import React from "react";

import { connect } from "react-redux";

//user selector
import { createStructuredSelector } from "reselect";

// import { auth } from "../../firebase/firebase.utils";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

//user selector
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

// Sign Out With Sagas
import { signOutStart } from "../../redux/user/user.actions";

import { ReactComponent as Logo } from "../../assets/crown.svg"

// After Styled component 2
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from "./header.styles";

// Sign Out With Sagas
const Header = ({ currentUser, hidden, signOutStart }) => (

    // const Header = ({ currentUser, hidden }) => (
    // Styled component 1
    <HeaderContainer>
        <LogoContainer to={'/'}>
            <Logo className="logo" />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to={'/shop'}>
                SHOP
            </OptionLink>
            <OptionLink to={'/shop'}>
                CONTACT
            </OptionLink>
            {
                currentUser ? (
                    // Styled component 2
                    // <OptionLink as={'div'} onClick={() => { auth.signOut() }}>

                    // Sign Out With Sagas
                    <OptionLink as={'div'} onClick={signOutStart}>
                        SIGN OUT
                    </OptionLink>
                ) : (
                    <OptionLink to="/signin">
                        SIGN IN
                    </OptionLink>
                )
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null : (<CartDropdown />)
        }

    </HeaderContainer>
);

//user selector
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

// Sign Out With Sagas
const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});
// Sign Out With Sagas
export default connect(mapStateToProps, mapDispatchToProps)(Header);

// export default connect(mapStateToProps)(Header);