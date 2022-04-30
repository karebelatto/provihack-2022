import './style.css';

import api from '../../services/api';
import { useStores } from '../../stores';
import { useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';

export function Login() {
	const { register, handleSubmit } = useForm();
  const { userStore: { setUserData, setToken } } = useStores();

  const history = useHistory();

	async function onSubmit({ userName, password }) {
    try {
      const body = { userName, password };
      const result = await api.post('/login', body);

      if (result.status !== 200) {
        throw 'Falha ao efetuar o login';
      }

      const { data: { token, user: userData } } = result;
      
      setToken(token);
      setUserData(userData);

      const route = userData.userType === 'Admin' || 
                    userData.userType === 'Super Admin' ? 'home' : 'admin';

      history.push(`/${route}`);      
    } catch (error) {
      if (error.request) {
        console.log('error', error.request.response);
      }
    }
	}

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<h1>Login</h1>
				<input type="text" placeholder="Nome de Usuario" {...register('userName', { required: true })} /> <br />
				<input type="password" placeholder="Senha" {...register('password', { required: true })} /> <br />
				<button type='submit'>Entrar</button>
				<h5>Primeira vez aqui? <Link to='/register'>Registre-se</Link></h5>
			</form>
		</div>
	);
}