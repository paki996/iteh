import React, { useState } from 'react';


import Button from '../../UI/Button/Button'
    let brPoena ;
function poeni(brojPoena){
        brPoena = brojPoena;
}

const student = (props) => {


    

    const zavrsen = props.stud.stud.completed;
return( 
<div>
    <p>IDStudenta: {props.stud.stud.id}</p>
    <p>Ime i prezime : {props.stud.stud.name}</p>
    <p>Tema: {props.stud.stud.tema}</p>
    {zavrsen==="jeste"  ?<div ><p>Broj bodova:  <input type="number" min="0" max="40"  onInput={e => poeni(e.target.value)}/></p>  </div> : null}
    {zavrsen==="jeste"  ?<Button 
        clicked={props.oceni(brPoena)}
        btnType="Success">Oceni
    </Button>: null}
    <Button 
        clicked={props.izadji}
        btnType="Danger">Izadji
    </Button>
    
</div>
)
}

export default student;