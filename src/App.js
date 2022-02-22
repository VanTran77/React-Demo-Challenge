import React, { Component } from 'react'
import axios from 'axios';
import Header from './components/Layout/Header';
import ShowVenues from './components/ShowVenues'
import SearchVenue from './components/SearchVenue';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      list: [],
      topic: '',
      latlong:'',
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation = () => {
    navigator.geolocation.getCurrentPosition(res => {
      // console.log(res.coords);
      this.setState({latlong: `${res.coords.latitude},${res.coords.longitude}`})
    }) 
  }

  onChange=(event)=>{
    this.setState({
      // name: name of input
      [event.target.name]:event.target.value
    })
  }

  onClick = (e) =>{
    e.preventDefault();
    
    const endpoint= 'https://api.foursquare.com/v3/places/search?';
    const apiKey = 'fsq3dj6D9owex8oECLbAW58vnBay0gjEO/KEmK+3RVKAi4g=';
    const params = {
      ll: this.state.latlong,
      radius: 100000,
      query: this.state.topic,
    };
    // console.log(params.ll);
    const url = endpoint + new URLSearchParams(params);

    const options = {
      method: 'GET',
      url: url,
      headers: {
        Accept: 'application/json',
        Authorization: apiKey
      }
    };
    
    this.state.topic === '' 
    ? alert ('Please fill something')
    : axios.request(options)
      .then((res)=>{
        // console.log(res.data.results);
        this.setState({
          list: res.data.results,
          topic: "",
        })
       })
      .catch((err)=>{console.log(err)})
  
  }
  
  render() {
    return (
      <div className="App">
         <Header />
         <SearchVenue onChange={this.onChange} onClick={(e) => this.onClick(e)} topic={this.state.topic}/>
         <ShowVenues list={this.state.list} />
      </div>
    )
  }
}