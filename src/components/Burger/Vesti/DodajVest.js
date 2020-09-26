import React from 'react';
import axios from 'axios';
import { Component } from 'react';
import Spinner from '../../UI/Spinner/Spinner';
import withErrorHndling from '../../../hoc/withErrorHandler/withErrorHandler';

class DodajVest extends Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          value: [],
          loading: true,
          error: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }

      componentDidMount() {
          console.log("Stigao u did mount");
        axios.get("https://iteh-c97a8.firebaseio.com/news.json")
          .then(res => {
            const data = res.data; 
            console.log(data);
            this.setState({ data: data, loading: false });
            console.log(this.state.data);
          })
          .catch(err => { // log request error and prevent access to undefined state
            this.setState({ loading: false, error: true });
            console.error(err);
          })
      }
      handleSubmit(e) {
        e.preventDefault();
    
        const data = {
         
          id: this.state.id,
          naslov: this.state.naslov ? this.state.naslov : this.state.data[0].naslov,
          vest: this.state.vest ? this.state.vest : this.state.data[0].vest
        };
        console.log(this.state.data.length+"OVO JE DUZINA");
    

    
       axios.post('https://iteh-c97a8.firebaseio.com/news/'+this.state.id, { data },)
          .then(res => {
            console.log(data);
            console.log(this.state.data[0]);
          }) 
      }

    render() {
        if (this.state.loading) {
          return (
            <div>
              <Spinner />
            </div>
          )
        }
        if (this.state.error ) { // if request failed or data is empty don't try to access it either
          return (
            <div>
              <p> No data fetched </p>
            </div>
          )
        }
        return (
          <form action="" onSubmit={this.handleSubmit}>
            <h5>ID:</h5>
            <input type="number" name="id"  onChange={e => this.onChange(e)} />
            <h5>Naslov:</h5>
            <input type="text" name="naslov"  onChange={e => this.onChange(e)} />
            <h5>Vest:</h5>
            <textarea name="vest" id="" cols="30" rows="10"  onChange={e => this.onChange(e)}></textarea>
            <button type="submit" className="btn-large waves-effect waves-light xbutton">Save</button>
          </form>
        );
      }
}





export default withErrorHndling(DodajVest,axios);