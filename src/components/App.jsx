import  { Component } from "react";
import Form from "./Form/Form";
export class App extends Component {
state = {
contacts: [],
name: ''
}
handleChange = event => {
event.preventDefault();
const asd = event.target.value;
this.setState({name : asd})
}

handleSubmit = event => {
event.preventDefault();
const contact = this.state.name;
return contact;
}
render() {return (
  <div>
    <Form/>
  </div>
  )
}

};
