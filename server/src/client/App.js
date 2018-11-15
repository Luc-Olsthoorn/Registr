import React, { Component } from 'react';
import './app.css';
import {client} from './graphql.js';
import gql from 'graphql-tag';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      text:'',
      returnText:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({text: event.target.value});
  }
  handleSubmit(){
    this.makeRequest(this.state.text)
    .then(data => {
      this.setState({
        returnText: data.data.note
      });
      
    })
    .catch(error => console.error(error));
  }
  makeRequest(id){
    return client.query({
      query: gql`
        {
          note(id: "${id}")
        }
      `,
        })
  }
  render() {
    return (
      <div>
        <label>
          Name:
          <input type="text" name="name" value={this.state.text} onChange={this.handleChange}/>
         </label>
        <input type="submit" value="Submit" onClick={this.handleSubmit}/>
        <h3>{this.state.returnText}</h3>
        </div>
    );
  }
}
