import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Divider, Header } from 'semantic-ui-react';

const Home = () => {
    const user = useSelector(state => state.user);
    return (
        <Container>
            <Divider hidden />
            <Header>Welcome {user.loggedIn ? user.profile.name : "to Demo App"}!</Header>
            <Divider />
        </Container>
    )
}

export default Home;