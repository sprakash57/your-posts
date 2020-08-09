import React from 'react';
import { Typography } from '@material-ui/core';
import Layout from './Layout';
import Navbar from './Navbar';

const PageNotFound: React.FC = () => {
    return (
        <React.Fragment>
            <Navbar />
            <Layout pageTitle='404'>
                <Typography variant='h5'>Page Not Found</Typography>
            </Layout>
        </React.Fragment>
    )
}

export default PageNotFound;
