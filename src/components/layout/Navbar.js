import React, {Component} from 'react';
import styled from 'styled-components';
import { FaGithub } from "react-icons/fa";


const Nav = styled.div `
background: peru;
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
                <Nav className="navbar">
                    <NavLeft>
                    <FaGithub /> Github Finder
                    </NavLeft>
                </Nav>
        );
    }
}

export default Navbar;