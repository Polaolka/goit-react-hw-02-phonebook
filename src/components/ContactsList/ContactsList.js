import css from '../ContactsList/ContactsList.module.css';
import React from 'react';

export const ContactsList = ({ contacts, onDeleteContact }) => (
  <ul className={css.listWrapper}>
    {contacts.map(({ id, name, number }) => (
      <li
        key={id}
        className={css.contactItem}
      >
        <p className={css.name}>{name}:</p>
        <p className={css.number}>{number}</p>
        <button
          type="button"
          className={css.button}
          onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);
