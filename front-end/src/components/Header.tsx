import { IUser } from '@App/types';
import * as React from 'react';
import { HeaderBox, Left, Right } from './styled';
import Button from '../components/Button';
import Avatar from '@material-ui/core/Avatar';
const avatar = require('../assets/images/profil.png');

const Header: React.FC<IUser> = (props: IUser) => {
    return (
        <>
            <HeaderBox>
                <Left>
                    <Avatar alt="User" src={avatar} />
                    <p className="h3">{props.names}</p><br />
                    <p className="h3">{props.email}</p>
                </Left>
                <Right>
                    <Button title="Log Out" />
                </Right>
            </HeaderBox>
        </>
    );
};

export default Header;