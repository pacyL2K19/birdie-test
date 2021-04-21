import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
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
    root: {
        width: '100%'
    },
    container: {
        maxHeight: 440
    },
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const FamillyMember: React.FC = () => {
    const classes = useStyles();
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
                                Eat
                            </Typography>
                            <Typography>Because you need strength</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body2" color="textSecondary">
                            10:00 am
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            <LaptopMacIcon />
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Code
                            </Typography>
                            <Typography>Because it&apos;s awesome!</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" variant="outlined">
                            <HotelIcon />
                        </TimelineDot>
                        <TimelineConnector className={classes.secondaryTail} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Sleep
                            </Typography>
                            <Typography>Because you need rest</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="secondary">
                            <RepeatIcon />
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper}>
                            <Typography variant="h6" component="h1">
                                Repeat
                            </Typography>
                            <Typography>Because this is the life you love!</Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </>
    );
};

export default FamillyMember;
