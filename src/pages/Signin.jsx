import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Button } from 'semantic-ui-react';
import FolderContext from '../context/FolderContext';

const Signin = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const users = useSelector(state => state.users);
    const { dispatch: ctxDispatch } = useContext(FolderContext);
    console.log(users);
    const onSignin = e => {
        e.preventDefault();
        const email = "demo3@gmail.com", password = "demo3";
        const user = users.find(u => u.email === email && u.password === password);
        if (!user) {
            alert('Error: wrong email or password!');
            return;
        }
        dispatch({ type: 'LOGGED_IN', user });
        ctxDispatch({ type: 'SET_FOLDERS', folders: user.folders })
        console.log({ user })
        history.replace('/');
    }
    return (
        <Container>
            <Form className="sign-in" onSubmit={onSignin}>
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

export default Signin;