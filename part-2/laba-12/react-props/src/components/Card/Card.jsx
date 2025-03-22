import "./Card.css";
import { Button, Card, CardContent } from "@mui/material";

const CardItem = ({ title, img, desc }) => {
   return (
      <div className="card-wrapper">
         <Card>
            <CardContent>
               <h2>Card</h2>
               <img src={img} alt="hero"></img>
               <p>{desc}</p>
               <Button onClick={() => alert(title)}>Дізнатися більше</Button>
            </CardContent>
         </Card>
      </div>
   );
};

export default CardItem;
