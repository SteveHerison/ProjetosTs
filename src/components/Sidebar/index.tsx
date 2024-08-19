import Logo from "../../assets/Design sem nome.png";

const Sidebar = () => {
  return (
    <aside
      className={`flex row-span-3 absolute z-10 w-full md:w-full h-full md:relative transition-transform transform `}
    >
      <div className="relative w-1/2 md:w-full h-full bg-black ">
        <section className="flex flex-col h-full justify-between">
          <div className="h-full flex flex-col space-y-32 items-center pt-5">
            <img
              src={Logo}
              alt="User Profile"
              className="w-24 h-24 object-cover flex rounded-xl outline outline-offset-4 bg-slate-500"
            />
          </div>
          <div className="h-20 flex justify-center items-center">footer</div>
        </section>
      </div>
      <div className="bg-black flex-1 h-full bg-opacity-50" />
    </aside>
  );
};

export default Sidebar;
