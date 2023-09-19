import { AiOutlineMenu } from "react-icons/ai";
import { Sidebar } from "~/widgets/sidebar";
import { useSidebarStore } from "~/widgets/sidebar/store/sidebar-store";

const BurgerMenu = () => {
  const open = useSidebarStore(store => store.open);

  return (
    <div className="p-2 rounded-[50%] transition-colors duration-200 ease-in-out text-2xl hover:bg-white/5 cursor-pointer">
      <AiOutlineMenu className="text-white" onClick={() => open()} />
      <Sidebar />
    </div>
  );
};

export default BurgerMenu;
