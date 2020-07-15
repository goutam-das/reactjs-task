import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Button, Divider } from 'semantic-ui-react';
import { useForm } from "react-hook-form";

const Signup = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const users = useSelector(state => state.users);
    console.log(users);
    const { register, errors, handleSubmit } = useForm();
    const onSignup = ({ name, email, password }) => {
        // console.log({ data })
        // const name = "Demo 3"
        // const email = "demo3@gmail.com", password = "demo3";
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
    console.log(errors)
    return (
        <Container>
            <Divider hidden />
            <Form onSubmit={handleSubmit(onSignup)} className="signup">
                <Form.Field
                    error={errors.hasOwnProperty('name')}
                >
                    <label>Name</label>
                    <input name="name" placeholder='Name' ref={register({ required: true })} />
                </Form.Field>
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
                <Button type='submit' primary>Signup</Button>
            </Form>
        </Container>
    )
}

export default Signup;