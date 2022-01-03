import React from "react"; 
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import axios from "axios";


 
class App extends React.Component{

  nextPath(path) {
  window.location.href =  "/contactlist";
  }

  constructor(props) {
    super(props);
    this.state = {
      contact: []
    };  
  }
  componentDidMount(){
    axios.get("http://localhost:6040/all")
    .then(response => (response.data))
    .then((data) => {
    this.setState({contact : data});
  });
  }
  
  render() {
    console.log(this.state.contact)
    
    return (
      
        <div className="ui container">
          <Header />
          <AddContact />
          
          <ContactList contact={this.state.contact.slice(0,5)}/>
          {/* <button className="ui button yellow" onClick={() => this.nextPath('/ContactList')} >View All Patient Grid</button>  */}
        </div>
     
    );
  }
}
export default App;
