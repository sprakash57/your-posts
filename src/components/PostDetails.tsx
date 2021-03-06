/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import Layout from './common/Layout';
import { IEmployeeDtlRoute, IPosts } from '../interfaces';
import Axios, { AxiosResponse } from 'axios';
import { POSTS } from '../constants';
import { Card, CardContent, Typography, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './common/Navbar';
import RenderContent from './common/RenderContent';

const useStyles = makeStyles({
    mb: {
        marginBottom: 10
    },
    pos: {
        minWidth: 375,
        boxShadow: '0px 2px 4px rgba(0,0,0,0.5)',
        borderRadius: 10
    }
})

const PostDetails: React.FC<IEmployeeDtlRoute> = (props) => {
    const classes = useStyles();
    const [post, setPost] = useState<IPosts>();
    const [ntwkIssue, setNtwkIssue] = useState(false);
    const [loading, setLoading] = useState(false);

    const loadPostsDetails = async () => {
        try {
            const response: AxiosResponse<IPosts> = await Axios.get(`${POSTS}/${props.match.params.id}`);
            setPost(response.data);
        } catch (error) {
            setNtwkIssue(true);
        }
        setLoading(false);
    }

    useEffect(() => {
        setLoading(true)
        loadPostsDetails()
    }, []);

    return (
        <React.Fragment>
            <Navbar />
            <Layout pageTitle='Details'>
                <RenderContent loading={loading} ntwkIssue={ntwkIssue}>
                    <Card className={classes.pos}>
                        <CardContent>
                            <Typography variant="h6" component="h2">{post?.title}</Typography>
                            <Divider className={classes.mb} />
                            <Typography variant="body2" component="p">{post?.body}</Typography>
                        </CardContent>
                    </Card>
                </RenderContent>
            </Layout>
        </React.Fragment>
    )
}

export default PostDetails;
