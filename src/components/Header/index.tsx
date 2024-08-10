import { FC } from "react";
import Menu from "../../assets/menu-alt-1-svgrepo-com.svg";

// Definir a interface para as propriedades
interface HeaderProps {
  toggleSidebar: () => void;
  isOpen: boolean;
}

const Header: FC<HeaderProps> = ({ toggleSidebar, isOpen }) => {
  return (
    <div className="h-20 border flex items-center justify-between p-2 ps-20 relative">
      {!isOpen && ( // Condicionalmente renderizar o botão
        <button
          className={`h-8 w-8 absolute z-10 left-2  bg-white rounded-full`}
          onClick={toggleSidebar}
        >
          <img src={Menu} alt="Menu" />
        </button>
      )}
      Header
    </div>
  );
};

export default Header;
