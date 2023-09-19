import { containerStyle } from './Header.tailwind';
import { Logotype, Cart, BurgerMenu } from './components';

const Header = () => {
  return (
    <div className={`${containerStyle} opacity-[0.7]`}>
      <BurgerMenu />
      <Logotype />
      <Cart />
    </div>
  );
};

export default Header;
