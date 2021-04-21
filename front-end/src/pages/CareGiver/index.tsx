import * as React from 'react';
import Header from '../../components/Header';

enum Roles {
    ADMIN = 'Admin',
    CARE_GIVER = 'Care Giver',
    CARE_RECIPIENT = 'Care Recipient'
}

const CareGiver: React.FC = () => {
    return (
        <>
            <Header
                names="Test user"
                email="test@email.com"
                role={Roles.CARE_GIVER}
            />
        </>
    );
};

export default CareGiver;
