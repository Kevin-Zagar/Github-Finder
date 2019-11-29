import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Nav = styled.div `
background: peru;
color: #fff;
padding: 20px;
overflow: auto;
`;

const NavLeft = styled.div`
width: 33.333%;
text-align: center;
font-size: 25px;
`;
 
export class Navbar extends Component {
    // Default output
    static defaultProps = {
        title: 'Github Finder',
        icon: 'fab fa-github fa-lg'
    };
    // Type checking
    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };

    render() {
        return (
                <Nav className='navbar'>
                    <NavLeft>
                       <i class={this.props.icon}></i> {this.props.title}
                    </NavLeft>  
                </Nav>
        );
    }
}
    /*
    <div>Icons made by <a href="https://www.flaticon.com/authors/payungkead" title="Payungkead">Payungkead</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    */        
export default Navbar;