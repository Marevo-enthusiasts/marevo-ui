import { AiOutlineMenu } from 'react-icons/ai';
import { PiShoppingCartSimple } from 'react-icons/pi';
import { containerStyle } from './Header.tailwind';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={containerStyle}>

      {/* Burger menu */}
      <div className="cursor-pointer text-white text-xl">
        <AiOutlineMenu />
      </div>

      {/* Logotype */}
      <h1 className="text-white tracking-[1px] text-[20px]">
        <Link to='/' className="cursor-pointer">
          MAREVO
        </Link>
      </h1>

      {/* Shopping cart */}
      <div className="text-white text-2xl cursor-pointer">
        <PiShoppingCartSimple />
      </div>
    </div>
  );
};

export default Header;
