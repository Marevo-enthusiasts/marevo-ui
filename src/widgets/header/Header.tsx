import { containerStyle } from './Header.tailwind';
import { containerElementsStyle } from './Header.tailwind';
import { Logotype, Cart, BurgerMenu } from './components';

const Header = () => {
  return (
    <div className={`${containerStyle}`}>
      <div className={`${containerElementsStyle}`}>
        <BurgerMenu />
        <Logotype />
        <Cart />
      </div>
    </div>
  );
};

export default Header;
