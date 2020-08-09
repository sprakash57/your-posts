import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';
import { USERS } from '../constants';
import { IEmployee } from '../interfaces';
import Layout from './common/Layout';
import { Box } from '@material-ui/core';
import EmployeeCard from './common/EmployeeCard';
import Navbar from './common/Navbar';

const Employees: React.FC = () => {

    const [users, setUsers] = useState<IEmployee[]>([]);
    const [loading, setLoading] = useState(true);
    const [ntwkIssue, setNtwkIssue] = useState(false);

    const loadUsers = async () => {
        try {
            const response: AxiosResponse<IEmployee[]> = await axios.get(USERS);
            setUsers(response.data);
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
            return <Box>{users.length && users.map(user => <EmployeeCard key={user.id} user={user} />)}</Box>
        }
    }

    useEffect(() => {
        loadUsers()
    }, []);

    return (
        <React.Fragment>
            <Navbar />
            <Layout pageTitle='Employees'>
                <section>
                    {renderContent()}
                </section>
            </Layout>
        </React.Fragment>
    )
}

export default Employees;
