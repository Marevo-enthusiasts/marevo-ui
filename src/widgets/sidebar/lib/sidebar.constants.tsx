import { AiOutlineInstagram } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { IListItem } from './sidebar.interfaces';

export const NAV_CUSTOMER_CARE: IListItem[] = [
  {
    name: 'Returns & Exchange',
    path: '/returns-and-exchange'
  },
  {
    name: 'Payments & Shipping',
    path: '/payments-and-shipping'
  },
  {
    name: 'FAQ',
    path: '/faq'
  },
];

export const NAV_CONTENT: IListItem[] = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About Us',
    path: '/about-us'
  },
];

export const SOCIAL_ICONS = [
  {
    icon: <AiOutlineInstagram />,
    url: 'https://www.instagram.com/marevo_ua'
  },
  {
    icon: <BsTelephone />,
    url: 'https://www.instagram.com/marevo_ua'
  },
];