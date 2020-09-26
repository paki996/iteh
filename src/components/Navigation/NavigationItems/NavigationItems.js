import React from 'react';
import {withRouter} from 'react-router';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Vesti</NavigationItem>
        {props.isAuth ? <NavigationItem link="/studenti" >Tabela Studenata</NavigationItem> : <div></div>}
        {!props.isAuth ? <NavigationItem link="/auth">Authenticate</NavigationItem> :
        <NavigationItem link="/logout">Logout</NavigationItem>
        }
        
    </ul>
);

export default withRouter(navigationItems);