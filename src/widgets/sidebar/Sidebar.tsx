import ReactDOM from 'react-dom';

import { useSidebarStore } from './store';
import { useClickOutside } from '~/shared/lib';
import { AnimatedHeader, Navigation } from './ui';
import { sidebarContainerStyle } from './Sidebar.tailwind';

const Sidebar = () => {
  const { isOpen, close } = useSidebarStore(state => state);
  const ref = useClickOutside<HTMLDivElement>(close);

  const animatedContainerStyle = `${sidebarContainerStyle} ${!isOpen ? "-translate-x-[100%]" : "translate-x-0"}`;

  return ReactDOM.createPortal(
    <div ref={ref} className={animatedContainerStyle}>
      <AnimatedHeader onClose={close} />
      <Navigation />
    </div>, 
  document.getElementById('sidebar')!);
};

export default Sidebar;