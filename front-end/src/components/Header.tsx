import { IUser } from '@App/types';
import * as React from 'react';
import { HeaderBox, Left, Right } from './styled';
import Button from '../components/Button';
import Avatar from '@material-ui/core/Avatar';
import Logo from '@App/components/Logo';

const avatar = require('../assets/images/profil.png');
const LogoUrl = require('../assets/images/logo-birdie.svg');

const Header: React.FC<IUser> = (props: IUser) => {
    return (
        <div>
            <HeaderBox>
                <Left>
                    <Logo src={LogoUrl} />
                    <Avatar alt="User" src={avatar}  />
                    <p className="h4">{props.names}</p><br />
                    <p className="h4">{props.email}</p>
                </Left>
                <Right>
                    <p className="h6">{props.role}</p>
                    <Button title="Log Out" />
                </Right>
            </HeaderBox>
        </div>
    );
};

export default Header;
