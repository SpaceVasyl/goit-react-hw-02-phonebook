import React, { Component } from "react";
import css from './PhoneBook.module.css';
// import { nanoid } from 'nanoid'
class Form extends Component {
    constructor(){
        super()
        this.state = {
            contacts: [],
            name: ''
          }
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
    
    render() {return (<>
    <h2>Phonebook</h2>
    <form onSubmit={this.handleSubmit}>
        <h3>Name</h3>
    <input
        type="text"
        name="name"
        onChange={this.handleChange}
        className={css.nameinput}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        
        required
      />
      <button type="submit">Add contact</button>
      </form>
      <div>
        <h2>Contacts</h2>
        <p>{this.handleSubmit}</p>
      </div>
      
      </>
      )
    }
}

export default Form;