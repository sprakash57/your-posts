import React from 'react'
import { Link } from 'react-router-dom';
import Layout from './common/Layout';

const Home: React.FC = () => {
    return (
        <Layout pageTitle='Welcome to Your posts!'>
            <section className='links'>
                <Link to='/posts'>All Posts</Link>
                <Link to='/employees'>Employees</Link>
            </section>
        </Layout>
    )
}

export default Home
