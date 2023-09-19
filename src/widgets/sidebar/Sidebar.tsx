import ReactDOM from 'react-dom';
import { TypeAnimation } from 'react-type-animation';
import { AiOutlineClose } from 'react-icons/ai';
import { useSidebarStore } from './store/sidebar-store';
import useClickOutside from '~/shared/lib/hooks/useClickOutside';
import { horizintalLineStyle, listItemStyle, navigationListStyle, sidebarContainerStyle } from './Sidebar.tailwind';
import { IListItem, NAV_CONTENT, NAV_CUSTOMER_CARE, SOCIAL_ICONS } from './lib';
import { FC } from 'react';

const Sidebar = () => {
  const { isOpen, close } = useSidebarStore(state => state);
  const ref = useClickOutside<HTMLDivElement>(() => close());

  const animatedContainerStyle = `${sidebarContainerStyle} ${!isOpen ? "-translate-x-[100%]" : "translate-x-0"}`;

  return ReactDOM.createPortal(
    <div ref={ref} className={animatedContainerStyle}>
      <div className="flex items-center justify-between px-8 py-4">
        <TypeAnimation 
            sequence={[
              '\nBAGS',
              1000,
              '\nHANDKERCHIEF',
              1000,
              '\nPOSTERS',
              1000,
              '\nACCESSORIES',
              1000,
            ]}
            speed={10}
            style={{ fontSize: '26px', fontWeight: 'bold', fontFamily: 'Roboto Condensed' }}
            repeat={Infinity}
        />
        <div className="" onClick={() => close()}>
          <AiOutlineClose className="cursor-pointer" />
        </div>
      </div>

      <Navigation />
    </div>, 
  document.getElementById('sidebar')!);
};

const Navigation = () => {
  return (
    <div className="mt-8 roboto-light ">
      <NavList items={NAV_CONTENT} />
      <div className={horizintalLineStyle} />
      <NavList items={NAV_CUSTOMER_CARE} />
      <div className={horizintalLineStyle} />
      <ul className="flex items-center gap-4">
        {SOCIAL_ICONS.map(icon => (<li style={{ fontFamily: 'Roboto Condensed Light' }} className=" first:pl-8 last:text-[18px] py-2 font-roboto-light text-xl cursor-pointer hover:opacity-70`" key={icon.url}>{icon.icon}</li>))}
      </ul>
    </div>
  );
};


const NavList: FC<{ items: IListItem[] }> = ({ items }) => {
  return (
    <ul className={navigationListStyle}>
      {items.map(item => (<li className={listItemStyle} key={item.path}>{item.name}</li>))}
    </ul>
  );
};

export default Sidebar;