// import Clock from "../../components/Clock";
// import EmojiRating from "../../components/EmojiRating";
import { useState } from "react";
import EventClick from "../../components/EventClick";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
// import Students from "../../components/StudentsTable";
// import { studentsList } from "../../data/students";
import Sidebar from "../../components/Sidebar";
// import { peopleList } from "../../data/peopleList";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="bg-zinc-800 text-white grid md:grid-cols-5 lg:grid-cols-8 ">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div
        className={`md:col-span-4  ${
          !isSidebarOpen ? "lg:md:col-span-8" : "lg:md:col-span-7"
        } col-span-2 flex flex-col h-screen`}
      >
        <Header toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
        <section className=" w-full h-full">
          {/* {peopleList.length > 0 && (
            <ul>
              {peopleList.map((person) => (
                <li key={person.id}>
                  {person.name} - {person.profession}
                </li>
              ))}
            </ul>
          )} */}
          {/* <Clock /> */}
          {/* <EmojiRating rate={3} /> */}
          {/* <div>
            <h1>Lista de estudantes</h1>
            <Students students={studentsList} />
          </div> */}
          <EventClick />
        </section>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
