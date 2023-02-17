import { ContactForm } from './ContactForm';
import ContactList from './ContactList';

const Form = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
};

export default Form;
