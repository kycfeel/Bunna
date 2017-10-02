import React from 'react';
import { Authentication } from '../components';

class Register extends React.Component {
    render() {
        return (
            <div>
                <Authentication mode={true} />
            </div>
        );
    }
}

export default Register;
