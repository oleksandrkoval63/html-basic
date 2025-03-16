import { useEffect, useState } from "react";
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
         <h1>ColorBlock</h1>
         <div
            className="color-block"
            style={{ backgroundColor: color, width: "200px", height: "200px" }}
         ></div>
         <button type="button" onClick={handleChangeColor}>
            Change Color
         </button>
      </div>
   );
};

export default ColorBlock;
