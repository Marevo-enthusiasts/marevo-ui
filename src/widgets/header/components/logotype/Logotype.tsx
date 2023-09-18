import { Link } from 'react-router-dom';

const Logotype = () => {
  return (
    <h1 className="text-white tracking-[1px] text-[26px]">
      <Link to='/' className="cursor-pointer">
        MAREVO
      </Link>
    </h1>
  );
};

export default Logotype;