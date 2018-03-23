import React, {Component} from 'react';

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
   fetch(`http://bible-api.com/${inputValue}`)
     .then(response => {
       return response.json();
     })
     .then(data => {
       console.log(data);
       let text = data.text.map((pic) => {
         return (
           <div className = "product" key = {pic.id}>
           <h1 className=""></h1>
             <p className = "titleProduct">{pic.title}</p>
             <p>${pic.price}</p>
             <form action="https://www.sandbox.paypal.com/cgi-bin/webscr" method = "post" target = "_top">
               <input type = "hidden" name = "cmd" value = "_xclick" />
               <input type = "image" src = "http://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" border = "0" name = "submit" alt = "Make payments with PayPal - it's fast, free and secure!" />
             </form>
           </div>
         );
       });
     });
 };
 render() {
    return (
      <div className = "container">
       <form onSubmit = {this.handleSubmit}>
         <label>
           <input class="searchInput" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Select book" />
         </label>

        <label>
           <input class="searchInput" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Select chapter" />
         </label>

        <label>
           <input class="searchInput" type="text" value={this.state.value} onChange={this.handleChange} placeholder="Select verse" />
         </label>

         <input class="searchButton" type="submit" value="Submit" />
       </form>
     </div>
   );
 }
}

export default APIAccess;

