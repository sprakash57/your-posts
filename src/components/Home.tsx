import React from 'react'
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <main className='home-root'>
            <header>
                <h1>Your Posts!!</h1>
            </header>
            <section className='home-links'>
                <Link to='/posts'>Posts</Link>
                <Link to='/users'>users</Link>
            </section>
        </main>
    )
}

export default Home
