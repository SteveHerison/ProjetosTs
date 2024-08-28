import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import Clock from "../../components/Clock";
// import EmojiRating from "../../components/EmojiRating";
// import EventClick from "../../components/EventClick";
// import Form from "../../components/Form";
// import Students from "../../components/StudentsTable";
// import { studentsList } from "../../data/students";
import Sidebar from "../../components/Sidebar";
// import { peopleList } from "../../data/peopleList";
import { useState } from "react";
import BallonEdit from "../../components/BallonEdit";
import { UserProvider } from "../../contexts/UserContext";
import ItemSlavo from "../../components/ItemSlavo";
// import Posts from "../../components/Postes";
import { PostProvider } from "../../contexts/PostContext";
import CriarPosts from "../../components/Postes/CriarPosts";
import DarkMode from "../../components/DarkMode";
// import Reducers from "../../components/Reducers";
// import EffectPlay from "../../components/EffectPlay";

// import Musix from "../../components/EffectPlay/Musix";
// import Effect from "../../components/Effect";
// import Quiz from "../../components/Quiz";
// import FotosGalax from "../../components/FotosInterfalacticas";
// import { images } from "../../data/imgGalax";
// import ModalPhoto from "../../components/FotosInterfalacticas/ModalPhoto";

// import List from "../../components/List";

const Home: React.FC = () => {
  const [showSide, setShowSide] = useState(false);
  const [showBallonEdit, setShowBallonEdit] = useState(false);
  const [alertSave, setAlertSave] = useState(false);
  const [criarPost, setCriarPost] = useState(false);
  // const [modalItemPhoto, setModalItemPhoto] = useState("");
  // const [showModalPhoto, setShowModalPhoto] = useState(false);

  const handleShowSide = () => {
    setShowSide((prev) => !prev);
  };
  const handleBallonEdit = () => {
    setShowBallonEdit((prev) => !prev);
  };

  const handleSave = () => {
    setAlertSave(true);
    setTimeout(() => {
      setAlertSave(false);
    }, 2000);
  };

  // const handleAbrir = () => {
  //   setCriarPost(true);
  // };

  const handleFechar = () => {
    setCriarPost(false);
  };

  // const openModalPhoto = (id: number) => {
  //   const photo = images.find((item) => item.id === id);
  //   if (photo) {
  //     setModalItemPhoto(photo.src);
  //     setShowModalPhoto(true);
  //   }
  // };

  // const closeModal = () => {
  //   setShowModalPhoto(false);
  // };

  return (
    <div className="bg-zinc-800 text-white grid md:grid-cols-5 lg:grid-cols-6 relative min-h-screen">
      <UserProvider>
        <PostProvider>
          {showSide && <Sidebar />}
          <div
            className={`${
              showSide ? "md:col-span-4 lg:col-span-5" : "md:col-span-full "
            }  col-span-6 flex flex-col `}
          >
            <Header
              handleShowSide={handleShowSide}
              showSide={showSide}
              onBallonEditClick={handleBallonEdit}
            />
            {showBallonEdit ? (
              <BallonEdit onClose={handleBallonEdit} onSave={handleSave} />
            ) : (
              <section className="w-full h-full flex-1">
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
                {/* <EventClick /> */}
                {/* <Form /> */}

                {/* <List /> */}
                {/*
            <FotosGalax openModalPhoto={openModalPhoto} />
            
            {showModalPhoto && (
              <ModalPhoto image={modalItemPhoto} closeModal={closeModal} />
            )}*/}
                {/* <Quiz /> */}
                {/* <Effect /> */}
                {/* <EffectPlay /> */}
                {/* <Musix /> */}
                {/* <Reducers /> */}
                {/* <Posts handleAbrir={handleAbrir} /> */}
                <DarkMode />
              </section>
            )}
            <Footer />
          </div>
          {alertSave && <ItemSlavo />}
          {criarPost && <CriarPosts handleFechar={handleFechar} />}
        </PostProvider>
      </UserProvider>
    </div>
  );
};

export default Home;
