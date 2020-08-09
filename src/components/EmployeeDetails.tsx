/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Box, Divider, Avatar, Typography, CardContent, Card } from '@material-ui/core';
import Layout from './common/Layout';
import { IEmployeeDtlRoute, IEmployee, ILocation } from '../interfaces';
import axios, { AxiosResponse } from 'axios';
import { USERS, IMAGE, LOCATION_API } from '../constants';
import Navbar from './common/Navbar';
import RenderContent from './common/RenderContent';

type CurrentLocation = { results: ILocation[] }

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        minWidth: 600,
        marginBottom: 10,
        boxShadow: '0px 2px 4px rgba(0,0,0,0.5)',
        borderRadius: 10
    },
    pos: {
        marginTop: 6,
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
    },
    alignCenter: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    large: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    }
}));

const EmployeeDetails: React.FC<IEmployeeDtlRoute> = (props) => {
    const classes = useStyles();
    const [details, setDetails] = useState<IEmployee>();
    const [ntwkIssue, setNtwkIssue] = useState(false);
    const [loading, setLoading] = useState(false);
    const [location, setLocation] = useState('');

    const loadUserDetails = async () => {
        try {
            const response: AxiosResponse<IEmployee> = await axios.get(`${USERS}/${props.match.params.id}`);
            setDetails(response.data);
            const { lat, lng } = response.data.address.geo;
            const location: AxiosResponse<CurrentLocation> = await axios.get(`${LOCATION_API}${lat},${lng}&key=${process.env.REACT_APP_LOC_API}`);
            const { data } = location;
            setLocation(data.results[0].formatted_address)
        } catch (error) {
            setNtwkIssue(true);
        }
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true);
        loadUserDetails();
    }, []);

    return (
        <React.Fragment>
            <Navbar />
            <Layout pageTitle={details?.name}>
                <RenderContent loading={loading} ntwkIssue={ntwkIssue}>
                    <Card className={classes.root}>
                        <CardContent>
                            <Box className={classes.alignCenter}>
                                <Avatar alt={details?.name} src={IMAGE} className={classes.large} />
                                <Typography variant='h5' component="h6" className={classes.pos}>
                                    <strong>{details?.username}</strong>
                                </Typography>
                                <Typography variant='body1'>
                                    <span role='img' aria-label='location'>📌</span> {location || 'Location not available'}
                                </Typography>
                            </Box>
                            <Box className={classes.pos}>
                                <Typography variant="h6" component="h6">Address</Typography>
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
                                <Typography variant="h6" component="h6">Employer Details</Typography>
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
                            <Typography variant="h6" component="h6">Contact</Typography>
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
                </RenderContent>
            </Layout>
        </React.Fragment>
    )
}

export default EmployeeDetails;
