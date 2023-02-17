import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContactsApi } from 'redux/contactApi';
import {
  deleteContact,
  saveContacts,
  filterContacts,
  isLoading,
  fetchContacts,
} from 'redux/Slise';
import { deleteContactsApi } from 'redux/contactApi';
import { Audio } from 'react-loader-spinner';

const ContactList = () => {
  const dispach = useDispatch();
  const loading = useSelector(isLoading);
  const contacts = useSelector(saveContacts);
  const filterValue = useSelector(filterContacts);

  useEffect(() => {
    dispach(fetchContactsApi());
  }, []);

  const filterNames = () => {
    return contacts.filter(el => {
      // console.log(filterValue);
      return el.name.toLowerCase().includes(filterValue.toLowerCase());
    });
  };

  const deleteContactById = id => {
    dispach(deleteContact(contacts.filter(item => item.id !== id)));
    dispach(deleteContactsApi(id));
  };

  const visible = filterNames();

  return (
    <div>
      {loading && (
        <div className="spiner">
          <Audio
            height="80"
            width="80"
            radius="9"
            color="green"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />
        </div>
      )}
      {!loading && (
        <ul className="list">
          {visible.map(({ name, id, number }) => {
            return (
              <li key={id} className="contact-item">
                <div className="contact-item_box">
                  {name} - - - - - - - - - {number}
                </div>
                <button
                  className="button contact-butoon"
                  onClick={() => deleteContactById(id)}
                >
                  ❌
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default ContactList;
