import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Button, Divider } from 'semantic-ui-react';
import { useForm } from "react-hook-form";
import FolderContext from '../context/FolderContext';

const Signin = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const users = useSelector(state => state.users);
    const { dispatch: ctxDispatch } = useContext(FolderContext);
    console.log(users);
    const { register, errors, handleSubmit } = useForm();
    const onSignin = ({ email, password }) => {
        // const email = "demo3@gmail.com", password = "demo3";
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
            <Divider hidden />
            <Form onSubmit={handleSubmit(onSignin)} className="signin">
                <Form.Field
                    error={errors.hasOwnProperty('email')}
                >
                    <label>Email</label>
                    <input name="email" placeholder='Email' ref={register({ required: true })} />
                </Form.Field>
                <Form.Field
                    error={errors.hasOwnProperty('password')}
                >
                    <label>Password</label>
                    <input type="password" name="password" placeholder='Password' ref={register({ required: true })} />
                </Form.Field>
                <Button type='submit' primary>Signin</Button>
            </Form>
        </Container>
    )
}

export default Signin;