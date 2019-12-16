import React, {Component} from 'react';
import styled from 'styled-components';
import { FaGithub } from "react-icons/fa";



const Nav = styled.div `
    display: flex;
    position: sticky;
    background: peru;
    top: 0;
    color: #fff;
    justify-content: space-between;
    z-index: 1;
    padding: 16px; 
`;

const NavLeft = styled.h2`
    width: 33.333%;
    text-align: center;
`;

export class Navbar extends Component {
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github'
    };


    render() {
        return (
                <Nav className="navbar">
                    <NavLeft>
                        <i className={this.props.icon}></i> {this.props.title}
                    </NavLeft>  
                </Nav>
        );
    }
}

export default Navbar;