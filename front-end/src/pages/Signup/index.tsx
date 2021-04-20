import * as React from 'react';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import Logo from '@App/components/Logo';
const LogoUrl = require('../../assets/images/logo-birdie.svg');

import { Box, OptionBox } from './styled';
import { PageLabel } from '../../components/styled';
import { useState } from 'react';

interface Props {

}

const Signup: React.FC = (props: Props) => {
    const [state, setState] = useState({
        isFamillyMember: true
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };
    return (
        <>
            <Box>
                <Logo src={LogoUrl} />
                <PageLabel>Signup</PageLabel>
                <TextField  id="signup-names" label="Names *" fullWidth={true} margin={'normal'} />
                <TextField  id="signup-email" label="Email *" fullWidth={true} margin={'normal'} />
                <TextField  id="signup-password" label="Password *" fullWidth={true} margin={'normal'} />
                <TextField  id="signup-password-confirmation" label="Pasword Confirmation *" fullWidth={true} margin={'normal'} />
                <TextField  id="signup-phone" label="Phone *" fullWidth={true} margin={'normal'} />
                <TextField  id="signup-address" label="Address" fullWidth={true} margin={'normal'} />
                <p className="h4">Signup as</p>
                <OptionBox>
                    <span>Familly Member</span>
                    <Switch
                        checked={state.isFamillyMember}
                        onChange={handleChange}
                        name="famillyMember"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    <span>Care Giver</span>
                </OptionBox>
            </Box>
        </>
    );
};

export default Signup;
