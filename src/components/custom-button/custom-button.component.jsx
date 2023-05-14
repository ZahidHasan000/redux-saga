import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

// Styled component 3
const CustomButton = ({ children, ...props }) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
);

export default CustomButton;