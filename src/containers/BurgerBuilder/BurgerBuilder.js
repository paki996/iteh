import React, { Component } from "react";
import {withRouter} from 'react-router';
import Aux from "../../hoc/Auxx/Auxx";
import TabelaStudenata from "../../components/Burger/TabelaStudenata/TabelaStudente";
import Vesti from '../../components/Burger/Vesti/Vesti';
import Footer from '../../components/Footer/Footer';

class BurgerBuilder extends Component {


  render() {
    return (
      <Aux>
          <Vesti/>
          <TabelaStudenata />
      </Aux>
    );
  }
}



export default withRouter(BurgerBuilder);
