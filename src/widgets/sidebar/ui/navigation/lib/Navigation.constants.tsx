import { AiOutlineInstagram } from 'react-icons/ai';
import { BsTelephone } from 'react-icons/bs';
import { INavItem, ISocialItem } from '../ui';

export const NAV_CUSTOMER_CARE: INavItem[] = [
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

export const NAV_CONTENT: INavItem[] = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About Us',
    path: '/about-us'
  },
];

export const SOCIAL_ICONS: ISocialItem[] = [
  {
    icon: <AiOutlineInstagram />,
    url: 'https://www.instagram.com/marevo_ua'
  },
  {
    icon: <BsTelephone />,
    url: 'https://www.instagram.com/'
  },
];