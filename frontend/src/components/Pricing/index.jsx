import React from "react";
import { Card } from "./Card";

import "./styles.css";

function Pricing() {
  return (
    <div className="pl-container">
      <div className="pl-flex-container">
        <div className="pl-text">
          <h1>Planos</h1>
          <p>
            Você já pensou que a cada pedalada que você dá na sua Bike, milhões
            de gramas de carbono deixam de ser emitidos na atmosfera?
          </p>
        </div>
        <div className="pl-pricing-grid">
          <Card title="Diário" value="5">
            <ul>
              <li>1 Viagem de 60 minutos</li>
              <li>Acesso à plataforma do app ECycle</li>
              <li>Acesso ao programa de recompensas</li>
            </ul>
          </Card>
          <Card title="Mensal" value="25" type="dark">
            <ul>
              <li>
                Viagens ilimitadas de 60 minutos durante o período do plano.
              </li>
              <li>R$5,00 a hora adicional</li>
              <li>Acesso à plataforma do app ECycle</li>
              <li>Acesso ao programa de recompensas</li>
            </ul>
          </Card>
          <Card title="Trimestral" value="50">
            <ul>
              <li>
                Viagens ilimitadas de 60 minutos durante o período do plano.
              </li>
              <li>R$5,00 a hora adicional</li>
              <li>Acesso à plataforma do app ECycle</li>
              <li>Acesso ao programa de recompensas</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Pricing;
