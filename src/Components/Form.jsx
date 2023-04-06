import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    user: "",
    email: "",
  });

  const handletextChange = (e) => {
    setUser({ ...user, user: e.target.value });
  };

  const handleEmailChange = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const handleClick = () => {
    if (user.user.length < 5 || !user.email) {
      alert("Por favor verifique su información nuevamente");
      return;
    } else {
      alert(`Gracias ${user.user} te contactaremos lo antes posible vía email`);
    }
  };

  return (
    <div formContact>
      <form>
        <input
          role="text"
          type="text"
          minLength="6"
          value={user.user}
          onChange={handletextChange}
        />
        <input
          role="email"
          type="email"
          value={user.email}
          onChange={handleEmailChange}
        />
        <button onClick={handleClick}>Enviar</button>
      </form>
    </div>
  );
};

export default Form;