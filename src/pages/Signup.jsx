import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Button } from 'semantic-ui-react';

const Signup = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const users = useSelector(state => state.users);

    console.log(users);
    const onSignup = e => {
        e.preventDefault();
        const name = "Demo 3"
        const email = "demo3@gmail.com", password = "demo3";
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            alert('Error: email already taken!');
            return;
        }

        const newUser = {
            name,
            email,
            password,
            folders: {}
        }
        dispatch({ type: 'REGISTER', newUser });
        alert('Your account has registered successfully')
        history.replace('/signin');
    }

    return (
        <Container>
            <Form onSubmit={onSignup}>
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' />
                </Form.Field>
                <Button type='submit' primary>Submit</Button>
            </Form>
        </Container>
    )
}

export default Signup;