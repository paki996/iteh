import React from 'react';

import elabLogo from '../../assets/images/elab.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={elabLogo} alt="logo" />
    </div>
);

export default logo;