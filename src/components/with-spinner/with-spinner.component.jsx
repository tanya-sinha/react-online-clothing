import React from 'react';
import * as spinnerStyles from '../spinner/spinner.styles';

const WithSpinner = WrappedComponent => {
    const Spinner = ({isLoading, ...otherProps}) => {
        return isLoading ? (
            <spinnerStyles.SpinnerOverlay>
                <spinnerStyles.SpinnerContainer></spinnerStyles.SpinnerContainer>
            </spinnerStyles.SpinnerOverlay>
        ) : <WrappedComponent {...otherProps} />
    };
    return Spinner;
};

export default WithSpinner;