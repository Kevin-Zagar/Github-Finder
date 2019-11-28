import React, {Component} from 'react';
import styled from 'styled-components';

const Nav = styled.div `
background: #333;
color: #fff;
padding: 20px;
overflow: auto
`;

const NavLeft = styled.div`
width: 33.333%;
text-align: center;
`;
 
export class Navbar extends Component {
    render() {
        return (
            <div>
                <Nav>
                    <NavLeft>
                      Github Finder
                    </NavLeft>
                </Nav>
            </div>
        )
    }
}

export default Navbar;