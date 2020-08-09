import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Box, Divider } from '@material-ui/core';
import { IEmployee } from '../../interfaces';

const useStyles = makeStyles({
    root: {
        minWidth: 600,
        marginBottom: 10,
        boxShadow: '0px 2px 4px rgba(0,0,0,0.5)',
        borderRadius: 10
    },
    pos: {
        marginBottom: 10,
    },
    contact: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 16
    },
    links: {
        textDecoration: 'none',
        color: 'black',
        padding: 8,
        paddingTop: 0,
        '&:hover': {
            backgroundColor: '#f3f0f0'
        }
    },
    pb0: {
        paddingBottom: 0,
    }
});

type IProps = { user: IEmployee }

const EmployeeCard: React.FC<IProps> = (props) => {
    const { name, address: { city }, email, website, phone, id } = props.user;
    const classes = useStyles();
    console.log(props);

    return (
        <Card className={classes.root}>
            <CardContent className={classes.pb0}>
                <Typography variant="h5" component="h2" className={classes.pos}>
                    {name}
                </Typography>
                <Typography className={classes.pos}>
                    <span role='img' aria-label='city'>🏡</span> {city}
                </Typography>
                <Box className={classes.contact}>
                    <Typography variant="caption" component="p" color="textSecondary">
                        <span role='img' aria-label='email'>📧</span> {email}
                    </Typography>
                    <Typography variant="caption" component="p" color="textSecondary">
                        <span role='img' aria-label='website'>🌐</span> {website}
                    </Typography>
                    <Typography variant="caption" component="p" color="textSecondary">
                        <span role='img' aria-label='phone'>📞</span> {phone}
                    </Typography>
                </Box>
                <Divider />
            </CardContent>
            <CardActions>
                <Link className={classes.links} to={`/employees/${id}`}>Full profile</Link>
            </CardActions>
        </Card>
    );
}

export default EmployeeCard;
