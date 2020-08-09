import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
// import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { USERS } from '../constants';
import { IUser } from '../interfaces';
import Layout from './common/Layout';
import { Box } from '@material-ui/core';
import UserCard from './common/UserCard';

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             display: 'flex',
//             '& > * + *': {
//                 marginLeft: theme.spacing(2),
//             },
//         },
//     }),
// )

const Users: React.FC = () => {

    // const cls = useStyles();

    const [users, setUsers] = useState<IUser[]>([]);
    const [loading, setLoading] = useState(true);
    const [ntwkIssue, setNtwkIssue] = useState(false);

    const loadUsers = async () => {
        try {
            const response: AxiosResponse<IUser[]> = await axios.get(USERS);
            setUsers(response.data);
        } catch (error) {
            setNtwkIssue(true);
        }
        setLoading(false);
    }
    console.log(users);
    const renderContent = () => {
        if (loading) {
            return <CircularProgress />
        } else if (ntwkIssue) {
            return <p>You are not connected to network</p>
        } else {
            return <Box>{users.length && users.map(user => <UserCard key={user.id} user={user} />)}</Box>
        }
    }

    useEffect(() => {
        loadUsers()
    }, []);

    return (
        <Layout pageTitle='Users'>
            <section className='users-list'>
                {renderContent()}
            </section>
        </Layout>
    )
}


export default Users;