import React from 'react';
import Container from '@material-ui/core/Container';

import Aux from '../Aux/Aux';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import classes from './Layout.module.css';

const Layout = (props) => {
    return (
        <Aux>
            <Toolbar/>
            <SideDrawer/>
            <main className={classes.Content}>
                <Container fixed>
                    {props.children}
                </Container>
            </main>
        </Aux>
    )
}

export default Layout;