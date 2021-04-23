import * as React from 'react';
// import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
// import LaptopMacIcon from '@material-ui/icons/LaptopMac';
// import HotelIcon from '@material-ui/icons/Hotel';
// import RepeatIcon from '@material-ui/icons/Repeat';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Header from '../../components/Header';

enum Roles {
    ADMIN = 'Admin',
    CARE_GIVER = 'Care Giver',
    FAMILLY_MEMBER = 'Familly Member',
    CARE_RECIPIENT = 'Care Recipient'
}

enum EventType {
    MOOD = 'Mood Observation',
    HEALTH = 'Health Check',
    SLEEP = 'Sleep'
}
interface User {
    id?: string;
    names: string;
    email: string;
    password?: string;
    token?: string;
    phone?: number;
    address?: string;
    visits?: string;
    role?: Roles;
}

interface CareRecipient {
    names: string;
    famillyMembers?: [User];
    observations?: [Observation];
}

interface Observation {
    id?: string;
    eventType: EventType;
    visitId: string;
    timestamp: string;
    careGiver: User;
    careRecipient: CareRecipient;
    observation: string;
}

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const FamillyMember: React.FC = () => {
    const classes = useStyles();
    // const [data, setData] = useState([]);
    return (
        <>
            <Header
                names="Test user"
                email="test@email.com"
                role={Roles.FAMILLY_MEMBER}
            />
            <Timeline align="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            9:30 am
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                            <FastfoodIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Mood observation
                            </Typography>
                            <Typography>Good mood from now</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            03-12-2020 12:30 am
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot>
                            <FastfoodIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Sleep checking
                            </Typography>
                            <Typography>Everything normal</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </>
    );
};

export default FamillyMember;
