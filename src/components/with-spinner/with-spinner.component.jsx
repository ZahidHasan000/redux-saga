// withSpinner HOC (After deleteing shop.data.js in redux folder in shop folder)
import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

// withSpinner HOC (After deleteing shop.data.js then creating withSpinner component)
const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        )
    }
    return Spinner;
};
export default WithSpinner;