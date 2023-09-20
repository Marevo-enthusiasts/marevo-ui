import { AiOutlineMenu } from "react-icons/ai";
import { useSidebarStore } from "~/widgets/sidebar";
import { containerStyle } from "./BurgerMenu.tailwind";

const BurgerMenu = () => {
  const { open } = useSidebarStore(store => store);

  return (
    <div className={containerStyle} onClick={() => open()}>
      <AiOutlineMenu className="text-white" />
    </div>
  );
};

export default BurgerMenu;
