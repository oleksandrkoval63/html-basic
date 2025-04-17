import { useEffect, useState } from "react";
import { Button, Card, CardContent } from "@mui/material";

import "./ColorBlock.css";

const ColorBlock = () => {
   const [color, setColor] = useState("red");

   const handleChangeColor = () => {
      setColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
   };

   useEffect(() => {
      console.log(`Current color is ${color}`);
   }, [color]);

   return (
      <div className="color-block-wrapper">
         <Card>
            <CardContent>
               <h1>ColorBlock</h1>
               <div
                  className="color-block"
                  style={{
                     backgroundColor: color,
                     width: "200px",
                     height: "200px",
                  }}
               ></div>
               <Button variant="contained" onClick={handleChangeColor}>
                  Change Color
               </Button>
            </CardContent>
         </Card>
      </div>
   );
};

export default ColorBlock;
