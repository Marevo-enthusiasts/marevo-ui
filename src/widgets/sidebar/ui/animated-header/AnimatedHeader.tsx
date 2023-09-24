import { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { TypeAnimation } from 'react-type-animation';

import { containerStyle } from './AnimatedHeader.tailwind';

interface IProps {
  onClose: () => void;
}

const AnimatedHeader: FC<IProps> = ({ onClose }) => {
  return (
    <div className={containerStyle}>
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

      <AiOutlineClose onClick={onClose} className="cursor-pointer" />
    </div>
  );
};

export default AnimatedHeader;