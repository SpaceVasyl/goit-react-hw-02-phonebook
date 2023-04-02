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
    
    render() {return (<>
    <h2>Phonebook</h2>
    <form>
        <h3>Name</h3>
    <input
        type="text"
        name="name"
        className={css.nameinput}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      </form>
      <button >Add contact</button>
      <div>
        <h2>Contacts</h2>
        <ul></ul>
      </div>
      
      </>
      )
    }
}

export default Phonebook;