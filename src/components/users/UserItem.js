import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const Card = styled.div`
    margin: 30px;
    padding: 16px;
    border: #444 dotted 1px;
    text-align: center;
`;

const Image = styled.img`
    border-radius:50%;
    width: 60px;
`;

export class UserItem extends Component {
    constructor() {
        super();
        this.state = {
            id: 'id',
            login: 'octocat',
            avatar_url: "https://avatars1.githubusercontent.com/u/583231?s=400&v=4",
            html_url: "https://github.com/octocat"
        }
    }
    render() {
        return (
                <Card>
                    <Image src={this.state.avatar_url}></Image>
                    <h3>{this.state.login}</h3>
                    <Button>Profile</Button>
                </Card>
        )
    }
}

export default UserItem;
