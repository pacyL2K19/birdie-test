import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import Header from '../../components/Header';
import Button from '@App/components/Button';

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

interface Column {
    id:
    | 'visitId'
    | 'care_recipient'
    | 'date'
    | 'event_type'
    | 'observation'
    | 'care_giver';
    label: string;
    value?: (v: string | CareRecipient | User) => string;
    minWidth?: number;
    align?: 'right';
}

const columns: Column[] = [
    {
        id: 'visitId',
        label: 'Visit Id',
        value: (value: string) => value
    },
    {
        id: 'care_recipient',
        label: 'Care recipient',
        value: (value: string) => value
    },
    {
        id: 'date',
        label: 'Date',
        value: (value: string) => value
    },
    {
        id: 'event_type',
        label: 'Event Type',
        value: (value: string) => value
    },
    {
        id: 'observation',
        label: 'Observation',
        value: (value: string) => value
    },
    {
        id: 'care_giver',
        label: 'Care Giver'
    }
];

function createData(
    visitId: string,
    careRecipient: CareRecipient,
    date: string,
    eventType: EventType,
    observation: string,
    careGiver: User
): Observation {
    return {
        visitId,
        careRecipient,
        timestamp: date,
        eventType,
        observation,
        careGiver
    };
};

const rows = [
    createData(
        'hhhd-wjjqw0-wisj',
        {
            names: 'Test Name'
        },
        '2021-2-23',
        EventType.MOOD,
        'Good',
        {
            names: 'Care giver sample',
            email: 'test@enail.com'
        }
    )
    // createData(
    //     {
    //         names: 'Test Name'
    //     },
    //     EventType.MOOD,
    //     'hhhd-wjjwqww0-wisj',
    //     '2021-2-23',
    //     'Good',
    //     {
    //         names: 'Care giver sample',
    //         email: 'test@enail.com'
    //     }
    // ),
    // createData(
    //     {
    //         names: 'Test Name'
    //     },
    //     EventType.MOOD,
    //     'hhhd-wjdqjw0-wisj',
    //     '2021-2-23',
    //     'Good',
    //     {
    //         names: 'Care giver sample',
    //         email: 'test@enail.com'
    //     }
    // ),
    // createData(
    //     {
    //         names: 'Test Name'
    //     },
    //     EventType.MOOD,
    //     'hhhwd-wjjw0-wisj',
    //     '2021-2-23',
    //     'Good',
    //     {
    //         names: 'Care giver sample',
    //         email: 'test@enail.com'
    //     }
    // ),
];

// const useStyles = makeStyles((theme) => ({
// //   paper: {
// //     padding: '6px 16px'
// //   },
// //   secondaryTail: {
// //     backgroundColor: theme.palette.secondary.main
// //   },

// })


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
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRowsPerPage(+event.target.value)
        setPage(0)
    };
    return (
        <>
            <Header
                names='Test user'
                email='test@email.com'
                role={Roles.FAMILLY_MEMBER}
            />
            {/* <Timeline align='alternate'>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant='body2' color='textSecondary'>
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
              <Typography variant='h6' component='h1'>
                Eat
              </Typography>
              <Typography>Because you need strength</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant='body2' color='textSecondary'>
              10:00 am
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color='primary'>
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant='h6' component='h1'>
                Code
              </Typography>
              <Typography>Because it&apos;s awesome!</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='primary' variant='outlined'>
              <HotelIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant='h6' component='h1'>
                Sleep
              </Typography>
              <Typography>Because you need rest</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color='secondary'>
              <RepeatIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant='h6' component='h1'>
                Repeat
              </Typography>
              <Typography>Because this is the life you love!</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline> */}
            <Grid container={true} className='px-5 py-5'>
                <Grid item={true} lg={7} md={7} xs={12} sm={12} className='px-5 py-5'>
                    <p className='h3 mb-5'>Previous observations</p>
                    <Paper className={classes.root}>
                        <TableContainer className={classes.container}>
                            <Table stickyHeader={true} aria-label='sticky table'>
                                <TableHead>
                                    <TableRow>
                                        {columns.map(column => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ minWidth: column.minWidth }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map(row => {
                                            return (
                                                <TableRow
                                                    hover={true}
                                                    role='checkbox'
                                                    tabIndex={-1}
                                                    key={row.visitId}
                                                >
                                                    {columns.map(column => {
                                                        const value = row[column.id]
                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                {column.value ? column.value(value) : value}
                                                            </TableCell>
                                                        )
                                                    })}
                                                </TableRow>
                                            )
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component='div'
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Paper>
                </Grid>
                <Grid item={true} className='px-5 py-5' lg={5}>
                    <p className='h3 mb-5'>New observation</p>
                    <TextField
                        id='care-recipient'
                        label='Care recipient *'
                        fullWidth={true}
                        margin={'normal'}
                    />
                    <TextField
                        id='care-recipient'
                        label='Event Type *'
                        fullWidth={true}
                        margin={'normal'}
                    />
                    <TextField
                        id='date'
                        label='Date *'
                        fullWidth={true}
                        margin={'normal'}
                    />
                    <TextField
                        id='note'
                        label='Note *'
                        multiline={true}
                        fullWidth={true}
                        margin={'normal'}
                    />
                    <div className='d-flex fle-row justify-content-around'>
                        <Button title='Save' />
                        <Button title='Cancel' />
                    </div>
                </Grid>
            </Grid>
        </>
    );
};

export default FamillyMember;
