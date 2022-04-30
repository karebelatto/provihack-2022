import './style.css';

import { Link } from 'react-router-dom';

export function Page404() {
  return (
    <div>
      <h2> Ops! </h2>
      <p> Página não encontrada </p>
      <button><Link to="/home">Página inicial</Link></button>
    </div>
  );
}
