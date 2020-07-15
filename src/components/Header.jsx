import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { Icon, Button } from 'semantic-ui-react';

const Header = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.user);
    console.log(user);
    const handleLogout = () => {
        dispatch({ type: 'LOG_OUT' });
        history.replace('/signin');
    }
    return (
        <header>
            <nav>
                <Link to="/"><h1><span>D</span>emo <span>A</span>pp</h1></Link>
                <div>
                    <ul>
                        {
                            user.loggedIn ?
                                <>
                                    <li>
                                        <Link to="/folders" className="folders">
                                            <Icon name="folder" />
                                            <span>My Folders</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/profile" className="profile">
                                            <Icon name="user circle" />
                                            <span>{user.profile.name}</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Button primary className="logout" onClick={handleLogout}><Icon name="power off" />Logout</Button>
                                    </li>
                                </> : <>
                                    <li>
                                        <NavLink to="/signin" activeClassName="active">Sign In</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/signup" activeClassName="active">Sign Up</NavLink>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;