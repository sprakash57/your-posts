import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { Box } from '@material-ui/core';

const useStyles = makeStyles({
    navBox: {
        position: 'sticky',
        top: 0,
        display: 'flex',
        flexDirection: 'row-reverse',
        '& > *': {
            textDecoration: 'none',
            color: 'black',
            padding: 10,
            margin: 5,
            boxShadow: '0px 2px 4px rgba(0,0,0,0.5)',
            borderRadius: 50
        }
    }
});

const Navbar = () => {
    const classes = useStyles();
    return (
        <Box component='nav' className={classes.navBox}>
            <Link to='/posts'><span title='Posts' role='img' aria-label='posts'>🧾</span></Link>
            <Link to='/employees'><span title='Employees' role='img' aria-label='employees'>👷‍</span></Link>
            <Link to='/'><span title='Home' role='img' aria-label='home'>🏡</span></Link>
        </Box>
    )
}

export default Navbar;
