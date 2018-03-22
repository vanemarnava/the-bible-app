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
    fetch(`http://bible-api.com/romans 12:1-16`) //La API permite el acceso solo una vez que le indiquemos el libro y capítulo/versículo
    .then(function(response) {
    //console.log(response)
    return response.json();
  })
    .then (function(data) {
    console.log(data);
  })
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


