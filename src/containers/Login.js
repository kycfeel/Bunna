import React from 'react';
import { Authentication } from '../components';
import { browserHistory } from 'react-router-dom';

class Login extends React.Component {


    render() {
        return (
            <div>
                <Authentication mode={false} />
            </div>
        );
    }
}


export default Login;
