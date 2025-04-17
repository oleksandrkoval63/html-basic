import { useState } from "react";
import "./UserForm.css";

const UserForm = () => {
   const [formData, setFormData] = useState({
      name: "",
      surname: "",
      groupCode: "",
      email: "",
   });
   const [cards, setCards] = useState([]);
   const handleSubmitForm = (e) => {
      e.preventDefault();
      setCards([...cards, formData]);
      setFormData({ name: "", surname: "", groupCode: "", email: "" });
   };
   return (
      <>
         <form onSubmit={handleSubmitForm} className="form-wrapper">
            <div className="form-item">
               <label htmlFor="name">Введіть ім`я</label>
               <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) =>
                     setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                     })
                  }
               />
            </div>
            <div className="form-item">
               <label htmlFor="surname">Введіть призвіще</label>
               <input
                  type="text"
                  name="surname"
                  value={formData.surname}
                  onChange={(e) =>
                     setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                     })
                  }
               />
            </div>
            <div className="form-item">
               <label htmlFor="code">Введіть код групи</label>
               <input
                  type="text"
                  name="groupCode"
                  value={formData.groupCode}
                  onChange={(e) =>
                     setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                     })
                  }
               />
            </div>
            <div className="form-item">
               <label htmlFor="email">Введіть електронну пошту</label>
               <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                     setFormData({
                        ...formData,
                        [e.target.name]: e.target.value,
                     })
                  }
               />
            </div>
            <button type="submit">Відправити</button>
         </form>
         <div className="card-wrapper">
            {cards.map((card, i) => (
               <div className="card-item" key={i}>
                  <ul>
                     <li>
                        {card.name} {card.surname}
                     </li>
                     <li>Код групи: {card.groupCode}</li>
                     <li>Пошта: {card.email}</li>
                  </ul>
               </div>
            ))}
         </div>
      </>
   );
};

export default UserForm;
