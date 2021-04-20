import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Logo from '@App/components/Logo';
const LogoUrl = require('../../assets/images/logo-birdie.svg');

import { Box } from '../styled';
import { PageLabel } from '../../components/styled';
// import { useState } from 'react';

interface Props {

}

const Signup: React.FC = (props: Props) => {
    // const [state, setState] = useState({
    //     isFamillyMember: true
    // });
    return (
        <>
            <Box>
                <Logo src={LogoUrl} />
                <PageLabel>Login</PageLabel>
                <TextField  id="login-email" label="Email *" fullWidth={true} margin={'normal'} />
                <TextField type="password" id="login-password" label="Password *" fullWidth={true} margin={'normal'} />
            </Box>
        </>
    );
};

export default Signup;
