import { FC } from "react";
import { INavItem } from "./NavItems.interfaces";
import { navigationListStyle, listItemStyle, horizintalLineStyle } from "./NavItems.tailwind";

const NavItems: FC<{ items: INavItem[] }> = ({ items }) => {
  return (
   <>
    <ul className={navigationListStyle}>
      {items.map(item => (<li className={listItemStyle} key={item.path}>{item.name}</li>))}
    </ul>

    <div className={horizintalLineStyle} />
   </>
  );
};

export default NavItems;