import React, { Component } from "react";
import css from './PhoneBook.module.css';
// import { nanoid } from 'nanoid'
class Phonebook extends Component {
    constructor(){
        super()
        this.state = {
            contacts: [],
            name: ''
          }
    }
    createNewContact = (e) => {
      e.preventDefault();
      const targetClick = e.target[0].value;
      this.setState(prevState=>{return {name:prevState[targetClick]}});
      console.log(this.state);
    }
    
    render() {return (<>
    <h2>Phonebook</h2>
    <form onSubmit={this.createNewContact}>
        <h3>Name</h3>
    <input
        type="text"
        name="name"
        className={css.nameinput}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        
        required
      />
      <button type="submit">Add contact</button>
      </form>
      
      <div>
        <h2>Contacts</h2>
        <ul></ul>
      </div>
      
      </>
      )
    }
}

export default Phonebook;