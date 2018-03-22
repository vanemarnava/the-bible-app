import React, {Component} from 'react';

class APIAccess extends Component {
  constructor(){
    super();
    this.state = {
      data: null,
    };
  }
 
  componentDidMount(){
    this.fetchData();
  }
  
  fetchData(){ // Smart component: interactua con el mundo exterior
    fetch(`https://api.esv.org/v3/passage/html/?q=genesis`)
    .then(response => console.log(response.json()))
    .then(parsedJSON => this.setState({data: parsedJSON}))
    .catch(error => console.log('Error',error))
  }

  /*render (){
    if (this.state.data) {
      return (
      <div> 
        <DisplayInfo
          rate = { this.state.data.CLP.rate }
          description = { this.state.data.CLP.description }
          code = { this.state.data.CLP.code }
        />
        <DisplayInfo
          rate = { this.state.data.USD.rate }
          description = { this.state.data.USD.description }
          code = { this.state.data.USD.code }
        />
      </div>
    );
    } else {
      return <div>Cargando, espere por favor...</div>
    }
  }*/
}

export default APIAccess;


