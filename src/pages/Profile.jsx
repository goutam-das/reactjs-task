import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Divider, Header, Segment } from 'semantic-ui-react';

const Profile = () => {
    const user = useSelector(state => state.user);
    return (
        <Container>
            <Divider hidden />
            <Header>My Profile</Header>
            <Divider />
            <section>
                <Segment>
                    <Header>Name: <span>{user.profile.name}</span></Header>
                    <Header>E-mail: <span>{user.profile.email}</span></Header>
                </Segment>
            </section>
        </Container>
    )
}

export default Profile;