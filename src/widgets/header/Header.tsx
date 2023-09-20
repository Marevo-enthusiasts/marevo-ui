import { Logotype, Cart, BurgerMenu } from './components';
import { containerStyle } from './Header.tailwind';

const Header = () => {
  return (
    <div className={containerStyle}>
      <BurgerMenu />
      <Logotype />
      <Cart />
    </div>
  );
};

export default Header;
