import Card from "../Card/Card";
import "./CardsList.css";

const CardsList = ({ cards }) => {
   return (
      <div className="cards-list">
         {cards.map((card) => (
            <Card
               key={card.id}
               title={card.title}
               desc={card.description}
               img={card.image}
            />
         ))}
      </div>
   );
};

export default CardsList;
