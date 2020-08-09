import React, { useState, useEffect } from 'react'
import { IPosts } from '../interfaces';
import axios, { AxiosResponse } from 'axios';
import { POSTS } from '../constants';
import Layout from './common/Layout';
import { Card, CardContent, Typography, CardActions } from '@material-ui/core';
import { FixedSizeList as List } from "react-window";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Navbar from './common/Navbar';
import RenderContent from './common/RenderContent';

type IRow = { index: number, style: any }

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

    const Row: React.FC<IRow> = ({ index, style }) => {
        return (
            <Card className={classes.pos} style={style}>
                <CardContent className={classes.pb0}>
                    <Typography variant="h6" component="h2">{posts[index].title}</Typography>
                </CardContent>
                <CardActions>
                    <Link className={classes.links} to={`/posts/${posts[index].id}`}>Show more</Link>
                </CardActions>
            </Card>
        )
    }

    useEffect(() => {
        setLoading(true);
        loadPosts();
    }, []);

    return (
        <React.Fragment>
            <Navbar />
            <Layout pageTitle='Posts'>
                <RenderContent loading={loading} ntwkIssue={ntwkIssue}>
                    <List height={500} itemCount={posts.length} itemSize={100} width={800}>
                        {Row}
                    </List>
                </RenderContent>
            </Layout>
        </React.Fragment>
    )
}

export default Posts;
