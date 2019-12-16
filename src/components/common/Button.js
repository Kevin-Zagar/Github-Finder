import React from 'react';
import styled, {css} from 'styled-components';

const Button = styled.button `
    background: ${props => props.theme.primaryColor};
    color: ${props => props.theme.text_color};
    padding: 5px 32px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
    display: inline-block;
`;

export default Button;