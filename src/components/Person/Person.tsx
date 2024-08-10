import Cards from "../Card";
import ListPersons from "../ListPerson";

const Person = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <Cards phrase="Frase de Efeito" />
      <ListPersons
        nome="Elon Musk"
        avatar="https://m.media-amazon.com/images/I/61bYI0O1+fL._AC_UF1000,1000_QL80_.jpg"
        roles={["CEO da Tesla", "CEO da Spacex"]}
      />
      <hr className="opacity-10" />
      <ListPersons
        nome="Jeff Bezos"
        avatar="https://cdn.prod.website-files.com/62e89931273b5c21be76c486/645aabd8f6bb3d0f962d0cce_jeff-bezos-fundador-amazon-foto-divulgacao.jpg"
        roles={["CEO da Amazon", "CEO da Blue Origin"]}
      />

      <ListPersons
        nome="Elon Musk"
        avatar="https://m.media-amazon.com/images/I/61bYI0O1+fL._AC_UF1000,1000_QL80_.jpg"
        roles={["CEO da Tesla", "CEO da Spacex"]}
      />
      <hr className="opacity-10" />
      <ListPersons
        nome="Jeff Bezos"
        roles={["CEO da Amazon", "CEO da Blue Origin"]}
      />
    </div>
  );
};

export default Person;
