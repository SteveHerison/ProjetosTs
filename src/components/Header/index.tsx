// Header.tsx
import Menu from "../../assets/menu-alt-1-svgrepo-com.svg";
import Close from "../../assets/close-bold-svgrepo-com.svg";
import Logo from "../../assets/Design sem nome.png";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

interface HeaderProps {
  handleShowSide: () => void;
  showSide: boolean;
  onBallonEditClick: () => void;
}

const Header: React.FC<HeaderProps> = ({
  handleShowSide,
  onBallonEditClick,
  showSide,
}) => {
  const userCtx = useContext(UserContext);
  return (
    <div className="h-16 w-full border flex items-center justify-between py-3 pr-2 ps-20 relative">
      <button
        onClick={handleShowSide}
        className="h-8 w-8 absolute z-10 left-2 bg-white rounded-full"
      >
        <img src={showSide ? Close : Menu} alt={showSide ? "Close" : "Menu"} />
      </button>
      Header
      <div>
        <div
          className="h-full flex items-center gap-3 cursor-pointer"
          onClick={onBallonEditClick}
        >
          <img
            src={Logo}
            alt="User Profile"
            className="w-6 h-6 md:h-10 md:w-10 object-cover flex rounded-xl outline outline-offset-4"
          />
          <div className="flex flex-col text-xs md:text-lg font-mono">
            <h2>{userCtx?.name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
