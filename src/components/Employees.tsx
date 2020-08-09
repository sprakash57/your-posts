import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { USERS } from '../constants';
import { IEmployee } from '../interfaces';
import Layout from './common/Layout';
import { Box } from '@material-ui/core';
import EmployeeCard from './common/EmployeeCard';
import Navbar from './common/Navbar';
import RenderContent from './common/RenderContent';

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

    useEffect(() => {
        loadUsers()
    }, []);

    return (
        <React.Fragment>
            <Navbar />
            <Layout pageTitle='Employees'>
                <RenderContent loading={loading} ntwkIssue={ntwkIssue}>
                    <Box>{users.length && users.map(user => <EmployeeCard key={user.id} user={user} />)}</Box>
                </RenderContent>
            </Layout>
        </React.Fragment>
    )
}

export default Employees;
