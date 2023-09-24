import { FC } from 'react';
import { ISocialItem } from './SocialIcons.interfaces';
import { containerStyle, itemStyle } from './SocialIcons.tailwind';

const SocialIcons: FC<{ icons: ISocialItem[] }> = ({ icons }) => {
  return (
    <ul className={containerStyle}>
      {icons.map(icon => (<li style={{ fontFamily: 'Roboto Condensed Light' }} className={itemStyle} key={icon.url}>{icon.icon}</li>))}
    </ul>
  );
};

export default SocialIcons;