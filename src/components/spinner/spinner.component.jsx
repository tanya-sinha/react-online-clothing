import React from 'react';
import * as spinnerStyles from './spinner.styles';

const Spinner = () => (
    <spinnerStyles.SpinnerOverlay>
        <spinnerStyles.SpinnerContainer></spinnerStyles.SpinnerContainer>
    </spinnerStyles.SpinnerOverlay>    
);

export default Spinner;
