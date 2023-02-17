import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, saveContacts } from 'redux/Slise';
import { addContactsApi } from 'redux/contactApi';
// import { fetchContactsApi, addContactsApi } from 'redux/contactApi';
import { addContacts } from 'redux/Slise';

export const ContactForm = () => {
  const dispach = useDispatch();
  const contacts = useSelector(saveContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputChange = ev => {
    const inputName = ev.target.name;
    const inputValue = ev.target.value;

    switch (inputName) {
      case 'name':
        setName(inputValue);
        break;
      case 'number':
        setNumber(inputValue);
        break;
      default:
        break;
    }
  };

  const handleSubmit = el => {
    el.preventDefault();
    const unique = contacts.map(elem =>
      name.toLowerCase() !== elem.name.toLowerCase() ? true : false
    );
    if (unique.includes(false)) {
      alert(`${name} is alredy in contacts`);
      return;
    }

    // dispach(addContact({ name: name, number: number }));
    dispach(addContactsApi({ name: name, number: number }));

    // dispach(addContactsApi({ name: name, phone: number, id: nanoid() }));
    // setTimeout(() => dispach(fetchContactsApi()), 200);

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        <h2>Name</h2>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          maxLength={12}
          required
          value={name}
          onChange={inputChange}
        />
      </label>
      <h2>Number</h2>
      <label>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          maxLength={9}
          required
          value={number}
          onChange={inputChange}
        />
      </label>
      <button className="button btn contact" type="submit">
        <p>Add contact</p>
      </button>
    </form>
  );
};
