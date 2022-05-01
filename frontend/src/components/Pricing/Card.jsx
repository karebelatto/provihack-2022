import "./styles.css";

export function Card({ title, value, children, type = "light" }) {
  return (
    <div
      className={`pl-pricing-card ${type == "light" ? "pl-light" : "pl-dark"}`}
    >
      <h3 className="pl-card-heading">Plano</h3>
      <h2 className="pl-card-title">{title}</h2>
      <h2 className="pl-card-value">R${value},00</h2>
      <div className="pl-card-container">{children}</div>
      <div className="pl-card-tooltip">
        <p>
          *Caso queira pedalar mais, será cobrada uma taxa de R$5,00 por hora.
        </p>
        <p>*Este plano é renovado automaticamente.</p>
      </div>
    </div>
  );
}
