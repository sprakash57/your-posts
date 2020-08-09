import React from 'react'
import { Link } from 'react-router-dom';
import Layout from './common/Layout';

const Home: React.FC = () => {
    return (
        <Layout pageTitle='Welcome to your posts!'>
            <section className='links'>
                <Link to='/posts'>Posts</Link>
                <Link to='/users'>Users</Link>
            </section>
        </Layout>
    )
}

export default Home
