import React, { Component } from "react";
import axios from "axios";
import {connect} from 'react-redux';
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";
import Footer from "../../Footer/Footer";
import classes from "./Vesti.css";
import TabelaStudente from "../TabelaStudenata/TabelaStudente";
import Button from '../../UI/Button/Button';
import Modal from '../../UI/Modal/Modal';
import DodajVest from "./DodajVest";
import  Toolbar from '../../Navigation/Toolbar/Toolbar';



class vesti extends Component {
  state = {
    vest: [],
    news: [],
    isSelected: false,
    error: false,
    
  };
  constructor(props) {
    super(props);
    this.promeni = this.promeni.bind(this);
    this.izadji = this.izadji.bind(this);
  } 

  componentDidMount() {
    const axios = require("axios");
    console.log("Mauntovala");
    axios({
      method: "GET",
      url: "https://numbersapi.p.rapidapi.com/random/trivia",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "numbersapi.p.rapidapi.com",
        "x-rapidapi-key": "946f78a9f9msha4d47c659a4c0e4p179878jsn4ce75f86e3a7",
        useQueryString: true,
      },
      params: {
        max: "20",
        fragment: "true",
        min: "10",
        json: "true",
      },
    })
      .then((response) => {
        const dobijena = response.data;
        this.setState((previousState) => ({
          vest: [...previousState.vest, dobijena],
        }));
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("https://iteh-c97a8.firebaseio.com/news.json")
      .then((response) => {
        const dobijena = response.data;
        console.log(this.state.news);
        this.setState((previousState) => ({
          news: [...previousState.vest, dobijena],
        }));
        console.log(this.state.news+"Ovo je posle get=a");
      })
      .catch((error) => {
        console.log(error);
      });
  }

promeni(){
  this.setState({
    isSelected: !this.state.isSelected
  })
}

izadji(){
  console.log("Dosao u izadji");
  this.setState({
    isSelected: !this.state.isSelected
  })

}

  render() {
    
    
    if (this.state.vest.length === 0 || this.state.news.length === 0) {
      return <div></div>;
    } else {
      if(this.props.isGuest){
        return(
          <div >
            <Toolbar isAuthenticated={false} isAuth={false} isGuest={this.props.isGuest} />
            <div className={classes.Tool}>
          <h1>Zanimljivost{this.state.vest[0].number}:</h1>
          </div>
          <p>{this.state.vest[0].text}</p>
          <div className={classes.Cont}>
          <div className={classes.Card}>
              <h3 className={classes.Head}>{this.state.news[0].naslov}</h3>
              <p className={classes.Para}>{this.state.news[0].vest}</p>
            </div>
            <div className={classes.Card}>
              <h3 className={classes.Head}>{this.state.news[0].naslov}</h3>
              <p className={classes.Para}>{this.state.news[0].vest}</p>
            </div>
            <div className={classes.Card}>
              <h3 className={classes.Head}>{this.state.news[0].naslov}</h3>
              <p className={classes.Para}>{this.state.news[0].vest}</p>
            </div>
            <div className={classes.Card}>
              <h3 className={classes.Head}>{this.state.news[0].naslov}</h3>
              <p className={classes.Para}>{this.state.news[0].vest}</p>
            </div>
            <div className={classes.Card}>
              <h3 className={classes.Head}>{this.state.news[0].naslov}</h3>
              <p className={classes.Para}>{this.state.news[0].vest}</p>
            </div>
          </div>
          {this.props.isAuthenticated ? <div className={classes.Butt}  >
            <Button btnType="Success" clicked={this.promeni} >Dodaj vest</Button> </div>: null }
          <TabelaStudente isGuest={this.props.isGuest} isAuth={false} className={classes.Tabela} />
          <Footer />
        </div>
        );
      }
      return (
        <div>
          <Modal show={this.state.isSelected} clicked={this.izadji}>
            <DodajVest izadji={this.izadji} />
          </Modal>
          <h1>Zanimljivost{this.state.vest[0].number}:</h1>
          <p>{this.state.vest[0].text}</p>
          <div className={classes.Cont}>
          <div className={classes.Card}>
              <h3 className={classes.Head}>{this.state.news[0].naslov}</h3>
              <p className={classes.Para}>{this.state.news[0].vest}</p>
            </div>
            <div className={classes.Card}>
              <h3 className={classes.Head}>{this.state.news[0].naslov}</h3>
              <p className={classes.Para}>{this.state.news[0].vest}</p>
            </div>
            <div className={classes.Card}>
              <h3 className={classes.Head}>{this.state.news[0].naslov}</h3>
              <p className={classes.Para}>{this.state.news[0].vest}</p>
            </div>
            <div className={classes.Card}>
              <h3 className={classes.Head}>{this.state.news[0].naslov}</h3>
              <p className={classes.Para}>{this.state.news[0].vest}</p>
            </div>
            <div className={classes.Card}>
              <h3 className={classes.Head}>{this.state.news[0].naslov}</h3>
              <p className={classes.Para}>{this.state.news[0].vest}</p>
            </div>
          </div>
          {this.props.isAuthenticated ? <div className={classes.Butt}  >
            <Button btnType="Success" clicked={this.promeni} >Dodaj vest</Button> </div>: null }
          <TabelaStudente isAuth={this.props.isAuthenticated} className={classes.Tabela} />
          <Footer />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
      isAuthenticated: state.auth.token !==null
  };
}
export default connect(mapStateToProps)(withErrorHandler(vesti, axios));
