import React from 'react';
import styled, {css} from 'styled-components';

const Button = styled.Button`
    background: ${prop => prop.Button.primaryColor};
    color: ${prop => prop.Button.text_color};
`;