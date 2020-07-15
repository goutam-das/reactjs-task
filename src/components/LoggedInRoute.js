import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';


const LoggedInRoute = ({ component: Component, ...rest }) => {
    const user = useSelector(state => state.user);
    console.log(user);
    return (<Route {...rest} render={props => (
        user.loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to={{
                    pathname: '/signin',
                    state: { from: props.location }
                }} />
            )
    )} />)
}

export default LoggedInRoute;