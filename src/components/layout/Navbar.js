import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Nav = styled.div `
    display: flex;
    position: sticky;
    background: ${props => props.theme.backgroundColor};
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

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
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