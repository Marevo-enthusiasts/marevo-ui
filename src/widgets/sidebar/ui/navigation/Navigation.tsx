import { NavItems, SocialIcons } from './ui';
import { NAV_CONTENT, NAV_CUSTOMER_CARE, SOCIAL_ICONS } from './lib';
import { containerStyle } from './Navigation.tailwind';

const Navigation = () => {
  return (
    <div className={containerStyle}>
      <NavItems items={NAV_CONTENT} />
      <NavItems items={NAV_CUSTOMER_CARE} />
      <SocialIcons icons={SOCIAL_ICONS} />
    </div>
  );
};

export default Navigation;