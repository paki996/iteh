import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,faPhoneSquareAlt,faAt,faHashtag } from '@fortawesome/free-solid-svg-icons'
import classes from './Footer.css';

const footer = (props) => {

    return(
        <div className={classes.Bg}>
            <div className={classes.Cont}>
            <div className={classes.Cont1}>
            <h4 className={classes.Head}>KATEDRA ZA ELEKTRONSKO POSLOVANJE</h4>
            <p className={classes.Info}>Jove Ilica 154, </p>
            <p className={classes.Info}>11000 Beograd,Srbija, </p>
            <p className={classes.Info}>+381113950895</p>
            <p className={classes.Info}>elab-officer@elab.rs</p>
            </div>
            </div>
            <div className={classes.Cont}>
                
            <h4 className={classes.Head}>KORISNI LINKOVI</h4>
            <a className={classes.A} href="https://www.elab.fon.bg.ac.rs"><p className={classes.Linkovi}>Elab web-stranica</p> </a>
            <a className={classes.A} href="https://www.fon.bg.ac.rs"><p className={classes.Linkovi}>FON</p></a>
            <a className={classes.A} href="https://www.bg.ac.rs"><p className={classes.Linkovi}>Univerzitet u Beogradu</p></a>
            <a className={classes.A} href="https://www.elab.fon.bg.ac.rs/nastavni-tim/"><p className={classes.Linkovi}>Nastavni Tim</p> </a>
            </div>
            
            <div className={classes.Cont}>
            <h4 className={classes.Head}>KONTAKT</h4>
            
            <p className={classes.Kontakt}><FontAwesomeIcon icon={faEnvelope} /> E-mail: elab-officer@elab.rs </p>
            <p className={classes.Kontakt}><FontAwesomeIcon icon={faPhoneSquareAlt} /> Telefon: +381113950895</p>
            <a className={classes.A} href="https://twitter.com/elab_fon"><p className={classes.Linkovi}><FontAwesomeIcon icon={faAt} /> ELAB_FON</p></a>
            <a className={classes.A} href="https://www.facebook.com/permalink.php?story_fbid=2355568744483014&id=217550851618158">
            <p className={classes.Linkovi}><FontAwesomeIcon icon={faHashtag} /> https://t.co/OBpL9GY5Mi</p></a>
            </div>
            
        </div>
    );
}

export default footer;