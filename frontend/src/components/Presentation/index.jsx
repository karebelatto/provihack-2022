import React from "react";

import "./styles.css";

function Presentation() {
  return (
    <div className="pr-container">
      <div className="pr-flex-container">
        <div className="pr-text">
          <h1 className="pr-title">
            Cuidar do meio ambiente nunca foi tão divertido!
          </h1>
          <p>
            O ECycle chegou para revolucionar o uso das bikes e ajudar o nosso
            planeta.{" "}
          </p>
          <p>
            Aqui você vai poder alugar uma Bike, acessar e salvar suas rotas
            favoritas, se conectar com pessoas e ter acesso aos resumos do seu
            desempenho. Além de você descobrir o quanto a sua pedalada ajudou o
            meio ambiente e ter a chance de participar de premiações incríveis
            em nossas empresas parceiras.
          </p>

          <button>Eu quero conhecer o app</button>
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
