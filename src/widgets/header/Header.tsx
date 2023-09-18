import { containerStyle } from './Header.tailwind';
import { Logotype, Cart, BurgerMenu } from './components';

const Header = () => {
  return (
    <div className={`${containerStyle}`}>
      <BurgerMenu />
      <Logotype />
      <Cart />
    </div>
  );
};

export default Header;
