import React from "react";

import "./styles.css";

function Presentation() {
  return (
    <div className="pr-container">
      <div className="pr-flex-container">
        <div className="pr-text">
          <h1>Apresentação</h1>
          <p>Cuidar do meio ambiente nunca foi tão fácil!</p>
          <p>
            Você já pensou que a cada pedalada que você dá na sua Bike, milhões
            de gramas de carbono deixam de ser emitidos na atmosfera? <br />
            É focado nisso que a ECycle chegou para revolucionar o uso das bikes
            e ajudar o nosso planeta. <br />
            Aqui você vai poder alugar uma Bike, acessar e salvar suas rotas
            favoritas, se conectar com pessoas e ter acesso aos resumos do seu
            desempenho. Além de tudo isso, você poderá descobrir o quanto a sua
            pedalada ajudou o meio ambiente e ter a chance de participar de
            premiações incríveis em nossas empresas parceiras. Venha pedalar com
            a gente, os seus pedais ajudam a salvar o mundo!
          </p>

          <button>Acessar app</button>
        </div>
        <div className="pr-image-grid">
          <div className="pr-box" />
          <div className="pr-box" />
          <div className="pr-box" />
        </div>
      </div>
    </div>
  );
}
export default Presentation;
