import * as React from 'react';
import { ButtonBox } from './styled';

interface Props {
    title: string;
    icon?: string;
}
const Button: React.FC<Props> = (props: Props) => {
    return (
        <>
            <ButtonBox>
                <i className={props.icon} style={{display: props.icon ? 'block' : 'none'}}/><p style={{textAlign: 'center', margin: 0, fontSize: 20}}>{props.title}</p>
            </ButtonBox>
        </>
    );
};

export default Button;
