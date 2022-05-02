import React from "react";

import image01 from "../../res/img/app_01.png";
import image02 from "../../res/img/app_02.png";
import image03 from "../../res/img/app_03.png";

import "./styles.css";

function Presentation() {
  const link =
    "https://www.figma.com/proto/y1lQ6q0AK3LcnASv2XLXjP/ProviHack?page-id=2%3A3&node-id=42%3A1783&viewport=241%2C48%2C0.22&scaling=scale-down&starting-point-node-id=42%3A1783&show-proto-sidebar=1";

  return (
    <div className="pr-container">
      <div className="pr-flex-container">
        <div className="pr-text">
          <h1 className="pr-title">
            Cuidar do meio ambiente nunca foi tão divertido!
          </h1>
          <p>
            O CBikes chegou para revolucionar o uso das bikes e ajudar o nosso
            planeta.{" "}
          </p>
          <p>
            Aqui você vai poder alugar uma Bike, acessar e salvar suas rotas
            favoritas, se conectar com pessoas e ter acesso aos resumos do seu
            desempenho. Além de você descobrir o quanto a sua pedalada ajudou o
            meio ambiente e ter a chance de participar de premiações incríveis
            em nossas empresas parceiras.
          </p>

          <div className="button-container">
            <a className="button" href={link} target="_blank">
              Eu quero conhecer o app
            </a>
          </div>
        </div>
        <div className="pr-image-grid">
          <img src={image01} alt="app image 01" />
          <img src={image02} alt="app image 01" />
          <img src={image03} alt="app image 01" />
        </div>
      </div>
    </div>
  );
}
export default Presentation;
