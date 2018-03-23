import React, {Component} from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid'; 

import './APIAccess/APIAccess.css'

class APIAccess extends Component {
constructor() {
      super();
        this.state = { pictures: [],
          inputValue: '',
        };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  handleChange(event) {
    this.setState({inputValue: event.target.value});
  }

 handleSubmit(event) {
   event.preventDefault();
   const {inputValue} = this.state;
   fetch(`http://bible-api.com/${inputValue}?verse_numbers=true`)
     .then(response => {
       return response.json();
     })
     .then(data => {
       console.log(data);
       /*render() {
         return (
           <div className = "Bible">
              <h1 className="BibleTitle">{data.reference}</h1>
              <p className = "BibleVerse">{data.text}</p>
           </div>
         );
       });*/
     });
 };
 render() {
    return (
      <Grid>
        <Row>
          <Col className="" xs={12} sm={12} md={12} lg={12}> 
            <div className = "container">
              <form onSubmit = {this.handleSubmit}>
                <label>
                  <input className="searchInput" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Select book" />
                </label>
                <br />
                <label>
                  <input className="searchInput" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Select chapter" />
                </label>
                <br />
                <label>
                  <input className="searchInput" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Select verse" />
                </label>
                <input className="searchButton" type="submit" value="Submit" />
              </form>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default APIAccess;

