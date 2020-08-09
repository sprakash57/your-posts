import React from 'react';
import Container from '@material-ui/core/Container';

type IProps = { pageTitle: string };

const Layout: React.FC<IProps> = (props) => {
    return (
        <Container maxWidth='md' className='layout'>
            <header>
                <h1>{props.pageTitle}</h1>
            </header>
            {props.children}
        </Container>
    )
}

export default Layout;
