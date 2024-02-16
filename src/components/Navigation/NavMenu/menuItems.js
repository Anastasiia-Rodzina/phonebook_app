import { nanoid } from 'nanoid';

const menuItems = [
  {
    id: nanoid(),
    to: '/',
    text: 'Home',
    private: false,
  },
  {
    id: nanoid(),
    to: '/contacts',
    text: 'Contacts',
    private: true,
  },
];

export default menuItems;
