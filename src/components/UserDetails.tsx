import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Box, Divider, CircularProgress } from '@material-ui/core';
import Layout from './common/Layout';
import { IUserDetailRoute, IUser } from '../interfaces';
import axios, { AxiosResponse } from 'axios';
import { USERS } from '../constants';

const useStyles = makeStyles({
    root: {
        minWidth: 375,
        marginBottom: 10,
        boxShadow: '0px 2px 4px rgba(0,0,0,0.5)',
        borderRadius: 10
    },
    pos: {
        marginBottom: 16
    },
    hrmargin: {
        marginBottom: 10
    },
    contact: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10
    }
});

const UserCard: React.FC<IUserDetailRoute> = (props) => {
    const classes = useStyles();
    const [details, setDetails] = useState<IUser>();
    const [ntwkIssue, setNtwkIssue] = useState(false);
    const [loading, setLoading] = useState(false);

    const loadUserDetails = async () => {
        try {
            const response: AxiosResponse<IUser> = await axios.get(`${USERS}/${props.match.params.id}`);
            setDetails(response.data);
        } catch (error) {
            setNtwkIssue(true);
        }
        setLoading(false);
    }

    const renderContent = () => {
        if (loading) {
            return <CircularProgress />
        } else if (ntwkIssue) {
            return <p>You are not connected to network</p>
        } else {
            return (
                <Card className={classes.root}>
                    <CardContent>
                        <Typography variant="h5" component="h2" className={classes.pos}>
                            Your registered user name: <strong>{details?.username}</strong>
                        </Typography>
                        <Box className={classes.pos}>
                            <Typography variant="h6" component="h6">
                                Address
                            </Typography>
                            <Divider className={classes.hrmargin} />
                            <Typography variant="caption" component="p">
                                Suite: {details?.address.suite}
                            </Typography>
                            <Typography variant="caption" component="p">
                                Street: {details?.address.street}
                            </Typography>
                            <Typography variant="caption" component="p">
                                City: {details?.address.city}
                            </Typography>
                            <Typography variant="caption" component="p">
                                Zip: {details?.address.zipcode}
                            </Typography>
                        </Box>
                        <Box className={classes.pos}>
                            <Typography variant="h6" component="h6">
                                Employer Details
                            </Typography>
                            <Divider className={classes.hrmargin} />
                            <Typography variant="caption" component="p">
                                Company: {details?.company.name}
                            </Typography>
                            <Typography variant="caption" component="p">
                                Phrase: {details?.company.catchPhrase}
                            </Typography>
                            <Typography variant="caption" component="p">
                                Business: {details?.company.bs}
                            </Typography>
                        </Box>
                        <Typography variant="h6" component="h6">
                            Contact
                            </Typography>
                        <Divider />
                        <Box className={classes.contact}>
                            <Typography variant="caption" component="p" color="textSecondary">
                                <span role='img' aria-label='email'>📧</span> {details?.email}
                            </Typography>
                            <Typography variant="caption" component="p" color="textSecondary">
                                <span role='img' aria-label='website'>🌐</span> {details?.website}
                            </Typography>
                            <Typography variant="caption" component="p" color="textSecondary">
                                <span role='img' aria-label='phone'>📞</span> {details?.phone}
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            )
        }
    }

    useEffect(() => {
        setLoading(true);
        loadUserDetails();
    }, []);

    return (
        <Layout pageTitle={details?.name}>
            <section className='users-list'>
                {renderContent()}
            </section>
        </Layout>
    )
}

export default UserCard;
