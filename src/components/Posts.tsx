import React, { useState, useEffect } from 'react'
import { IPosts } from '../interfaces';
import axios, { AxiosResponse } from 'axios';
import { POSTS } from '../constants';
import Layout from './common/Layout';
import { CircularProgress, Box, Card, CardContent, Typography, CardActions } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Navbar from './common/Navbar';

const useStyles = makeStyles({
    links: {
        textDecoration: 'none',
        color: 'black',
        fontSize: 14,
        padding: 8,
        paddingTop: 0,
        '&:hover': {
            backgroundColor: '#f3f0f0'
        }
    },
    pb0: {
        paddingBottom: 0
    },
    pos: {
        minWidth: 375,
        marginBottom: 10,
        boxShadow: '0px 2px 4px rgba(0,0,0,0.5)',
        borderRadius: 10
    }
})

const Posts: React.FC = () => {
    const classes = useStyles();
    const [posts, setPosts] = useState<IPosts[]>([]);
    const [ntwkIssue, setNtwkIssue] = useState(false);
    const [loading, setLoading] = useState(false);

    const loadPosts = async () => {
        try {
            const response: AxiosResponse<IPosts[]> = await axios.get(POSTS);
            setPosts(response.data);
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
            return <Box>{posts.length && posts.map(post => (
                <Card className={classes.pos} key={post.id}>
                    <CardContent className={classes.pb0}>
                        <Typography variant="h6" component="h2">{post.title}</Typography>
                    </CardContent>
                    <CardActions>
                        <Link className={classes.links} to={`/posts/${post.id}`}>Show more</Link>
                    </CardActions>
                </Card>
            ))}</Box>
        }
    }

    useEffect(() => {
        setLoading(true);
        loadPosts();
    }, []);

    return (
        <React.Fragment>
            <Navbar />
            <Layout pageTitle='Posts'>
                <section>
                    {renderContent()}
                </section>
            </Layout>
        </React.Fragment>
    )
}

export default Posts;
