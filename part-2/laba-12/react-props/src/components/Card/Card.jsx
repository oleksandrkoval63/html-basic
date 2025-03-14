import "./Card.css";

const Card = ({ title }) => {
   return (
      <div className="card-wrapper">
         <h2>Card</h2>
         <button type="button" onClick={() => alert(title)}>
            Дізнатися більше
         </button>
      </div>
   );
};

export default Card;
