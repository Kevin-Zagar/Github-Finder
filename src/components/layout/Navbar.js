import React, {Component} from 'react';
import styled from 'styled-components';
import { FaGithub } from "react-icons/fa";


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
font-weight: bold;
`;
 
export class Navbar extends Component {
    render() {
        return (
                <Nav className="navbar">
                    <NavLeft>
                     <FaGithub size={23}></FaGithub> {this.props.title}
                    </NavLeft>  
                </Nav>
        );
    }
}
    /*
    <div>Icons made by <a href="https://www.flaticon.com/authors/payungkead" title="Payungkead">Payungkead</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    */        
export default Navbar;