/* eslint-disable no-undef */
import React, { Component } from "react";
import classes from './TabelaStudenata.css';
import axios from "axios";
import {BootstrapTable,TableHeaderColumn} from 'react-bootstrap-table';
import {withRouter} from 'react-router';

import Aux from "../../../hoc/Auxx/Auxx";
import Student from './Student';
import Modal from '../../UI/Modal/Modal';





class TabelaStudenata extends Component {
  constructor(props) {
    super(props);

    this.state = {
      student : [],
      isSelected : false,
      ubaci: false,
      odabrani : {
        stud: [],
        brojPoena: 0
      },
      error : false
    }
    this.onRowSelect = this.onRowSelect.bind(this);
    this.onAfterSave = this.onAfterSave.bind(this);
    this.unesiOcenu = this.unesiOcenu.bind(this);
}

onRowSelect(row) {
  const odabrani = {...this.state.odabrani}
  odabrani.stud = row;
  this.setState(state => ({
    isSelected: !state.isSelected
}));
this.setState({odabrani});
}
onBeforeSave(row){
  this.setState(state => ({
    odabrani: row
}));
}
onAfterSave(cellValue){
  const odabrani = {...this.state.odabrani}
  odabrani.stud.completed = cellValue;
  this.setState({odabrani})

}

componentDidMount() {
  console.log(this.props);
axios
  .get(`https://my-json-server.typicode.com/meda996/fake/student`)
  .then((response) => {
    this.setState({ 
        student: response.data
    });
    
    console.log(this.state.student);
  });
}

componentWillMount(){

}

  izadji = () => {
    this.setState({isSelected: false});
    
  }
  izadjiSacuvaj = (brPoena) =>{
    
    this.setState({isSelected: false});

  }

  unesiOcenu = (brojP) => {
    if(brojP !== undefined && this.state.odabrani !== [] && brojP !== -1){
    const odabrani = {...this.state.odabrani}
  odabrani.brojPoena = brojP;

      const ocenjeno = this.state.odabrani.stud.completed;
      axios.put('https://my-json-server.typicode.com/meda996/fake/student/'+this.state.odabrani.stud.id,{
        completed: this.state.odabrani.stud.completed,
        
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      })
      
    }
  }


  
  render(){
    const selectRowProp = {
      mode: 'radio',
      clickToSelect: false,
      onSelect: this.onRowSelect
      
    }
    const cellEdit = {
      mode: 'click',
      blurToSave: true,
      beforeSaveCall: this.onBeforeSave,
      afterSaveCall: this.onAfterSave
    }
    if(this.props.isAuth === true){
    return (
      <Aux>
      <Modal show={this.state.isSelected}>
        <Student stud={this.state.odabrani} oceni={this.unesiOcenu} izadji={this.izadji}  />
      </Modal>
        <BootstrapTable className={classes.BootstrapTable} data={this.state.student}  hover={true}  search bordered={true}
        containerStyle={ { border: 'black solid 1px'}}
        headerStyle={ {border: 'black solid 1px', background : 'orange' } }
        bodyStyle={{border: 'black solid 1px',background: 'darkkhaki'}}
        selectRow={selectRowProp}
        cellEdit={cellEdit}
        insertRow={true}
        >
          <TableHeaderColumn  className={classes.TableHeaderColumn} columnClassName={classes.Column} editable={true} dataField="id" isKey dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
          <TableHeaderColumn className={classes.TableHeaderColumn} columnClassName={classes.Column} editable={true} dataField="name"  dataAlign="center" dataSort={true}>Ime</TableHeaderColumn>
          <TableHeaderColumn className={classes.TableHeaderColumn} columnClassName={classes.Column} editable={true} dataField="tema"  dataAlign="left" dataSort={true}>Tema</TableHeaderColumn>
          <TableHeaderColumn className={classes.TableHeaderColumn} columnClassName={classes.Column} dataField="completed"  dataAlign="center" dataSort={true} 
          editable={ {type:'checkbox' , options: {values: "jeste:nije" }}}>Predat rad</TableHeaderColumn>
        </BootstrapTable>
        
      </Aux>
    );
    }else{
      return (
        <Aux>
          <BootstrapTable className={classes.BootstrapTable} data={this.state.student}  hover={true}  search bordered={true}
          containerStyle={ { border: 'black solid 1px'}}
          headerStyle={ {border: 'black solid 1px', background : 'orange' } }
          bodyStyle={{border: 'black solid 1px',background: 'darkkhaki'}}

          >
            <TableHeaderColumn  className={classes.TableHeaderColumn} columnClassName={classes.Column}  dataField="id" isKey dataAlign="center" dataSort={true}>ID</TableHeaderColumn>
            <TableHeaderColumn className={classes.TableHeaderColumn} columnClassName={classes.Column}  dataField="name"  dataAlign="center" dataSort={true}>Ime</TableHeaderColumn>
            <TableHeaderColumn className={classes.TableHeaderColumn} columnClassName={classes.Column}  dataField="tema"  dataAlign="left" dataSort={true}>Tema</TableHeaderColumn>
            <TableHeaderColumn className={classes.TableHeaderColumn} columnClassName={classes.Column} dataField="completed"  dataAlign="center" dataSort={true} 
            >Predat rad</TableHeaderColumn>
          </BootstrapTable>
          
        </Aux>
      );
    }
  }
};



export default withRouter(TabelaStudenata);
