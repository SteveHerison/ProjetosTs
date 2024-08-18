// Header.tsx
import Menu from "../../assets/menu-alt-1-svgrepo-com.svg";
import Close from "../../assets/close-bold-svgrepo-com.svg";
import Logo from "../../assets/Design sem nome.png";
import Arrow from "../../assets/arrow-circle-down-svgrepo-com.svg";

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
  return (
    <div className="h-16 w-full border flex items-center justify-between p-2 ps-20 relative">
      <button
        onClick={handleShowSide}
        className="h-8 w-8 absolute z-10 left-2 bg-white rounded-full"
      >
        <img src={showSide ? Close : Menu} alt={showSide ? "Close" : "Menu"} />
      </button>
      Header
      <div>
        <div className="h-full flex items-center gap-3">
          <img
            src={Logo}
            alt="User Profile"
            className="w-6 h-6 md:h-10 md:w-10 object-cover flex rounded-xl outline outline-offset-4"
          />
          <div className="flex flex-col text-xs md:text-lg font-mono">
            <h2>Nome do Usuário</h2>
          </div>
          <button
            className="absolute right-0 bottom-0"
            onClick={onBallonEditClick}
          >
            <img src={Arrow} alt="" className="w-6 h-6 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
