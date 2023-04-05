import React, { Component } from "react";
import css from './Form.module.css';
// import { nanoid } from 'nanoid'
class Form extends Component {
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
    console.log(contact); 
    }
    
    render() { return (<form 
    onSubmit={this.handleSubmit}>
        <h3>Name</h3>
    <input
        type="text"
        name="name"
        onChange={this.handleChange}
        className={css.nameinput}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required/>
      <button type="submit">Add contact</button>
      </form>)}
      
}

export default Form;