import styled from 'styled-components';
import {Link} from 'react-router-dom';

// const optionStyles = css`
//     padding: 10px 15px;
//     cursor : pointer;
// `

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`;

export const OptionConatiner = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;
`;

export const OptionLinks = styled(Link)`
    padding: 10px 15px;
    cursor : pointer;
`;

// export const OptionDiv = styled.div`
//     ${optionStyles}
// `;