import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons'
import classes from './Footer.css';

const footer = (props) => {

    return(
        <div className={classes.Bg}>
            <div className={classes.Cont}>
            <h4 className={classes.Head}>KATEDRA ZA ELEKTRONSKO POSLOVANJE</h4>
            <p className={classes.Info}>Jove Ilica 154, </p>
            <p className={classes.Info}>11000 Beograd,Srbija, </p>
            <p className={classes.Info}>+381113950895</p>
            <p className={classes.Info}>elab-officer@elab.rs</p>
            </div>
            <div className={classes.Cont}>
            <h4 className={classes.Head}>KORISNI LINKOVI</h4>
            <p className={classes.Info}>Jove Ilica 154, </p>
            <p className={classes.Info}>11000 Beograd,Srbija, </p>
            <p className={classes.Info}>+381113950895</p>
            <p className={classes.Info}>elab-officer@elab.rs</p>
            </div>
            <div className={classes.Cont}>
            <h4 className={classes.Head}>KONTAKT</h4>
            <p className={classes.Info}>Jove Ilica 154, </p>
            <p className={classes.Info}>11000 Beograd,Srbija, </p>
            <p className={classes.Info}>+381113950895</p>
            <p className={classes.Info}>elab-officer@elab.rs</p>
            </div>
        </div>
    );
}

export default footer;