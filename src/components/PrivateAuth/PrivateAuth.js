import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import { isAuthenticated } from '../../services/auth';

const PrivateAuth = ({ component: Component, ...rest }) => {

    return (
        <Route
            {...rest}
            render={
                (props) => {
                    return isAuthenticated() ? <Component /> : <Redirect to='/'/>;
                }
            }
        />
    );

};

export default PrivateAuth;