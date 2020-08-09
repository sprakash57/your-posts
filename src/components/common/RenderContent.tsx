import React from 'react'
import { CircularProgress, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

type IProps = { loading: boolean, ntwkIssue: boolean };

const useStyles = makeStyles({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const RenderContent: React.FC<IProps> = (props) => {
    const classes = useStyles();

    if (props.loading) {
        return <CircularProgress />
    } else if (props.ntwkIssue) {
        return <Box className={classes.wrapper}>
            <Typography variant='h4'>
                <span role='img' aria-label='thinking'>🤔</span>
            </Typography>
            <Typography variant='h5' component='h3'>It seems either network is broken or URL doesn't exist</Typography>
        </Box>
    } else {
        return <section>{props.children}</section>
    }
}

export default RenderContent;
