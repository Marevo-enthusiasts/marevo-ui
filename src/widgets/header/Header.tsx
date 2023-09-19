import { containerStyle } from './Header.tailwind';
import { containerElements } from './Header.tailwind';
import { Logotype, Cart, BurgerMenu } from './components';

const Header = () => {
  return (
    <div className={`${containerStyle} after:absolute after:bg-white after:w-full after:h-[1.4px] after:opacity-[.5]`}>
      <div className={`${containerElements}`}>
        <BurgerMenu />
        <Logotype />
        <Cart />
      </div>
    </div>
  );
};

export default Header;
