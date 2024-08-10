import { FC } from "react";
import Logo from "../../assets/Design sem nome.png";

const listMenu = [
  { id: 1, profession: "mathematician" },
  { id: 2, profession: "chemist" },
  { id: 3, profession: "physicist" },
  { id: 4, profession: "chemist" },
  { id: 5, profession: "astrophysicist" },
];

// Definir a interface para as propriedades
interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <aside
      className={`bg-black row-span-3 col-span-1 absolute z-10 w-60 md:w-full h-full md:relative transition-transform transform ${
        isOpen ? "translate-x-0" : " hidden"
      }`}
    >
      <button
        className="absolute right-0  text-2xl rounded-full px-2  "
        onClick={toggleSidebar}
      >
        x
      </button>

      <section className="flex flex-col h-full justify-between">
        <div className="h-full flex flex-col space-y-32 items-center pt-5">
          <img
            src={Logo}
            alt="User Profile"
            className="w-24 h-24 object-cover flex rounded-xl outline outline-offset-4 bg-slate-500"
          />
          <ul className="flex flex-col gap-4 w-full pr-5">
            {listMenu.map(({ id, profession }) => (
              <li
                key={id}
                className="p-1 bg-white text-black rounded-r-xl cursor-pointer"
              >
                {profession}
              </li>
            ))}
          </ul>
        </div>
        <div className="h-20 flex justify-center items-center border p-9">
          oi
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
