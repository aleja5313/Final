import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import {useForm } from '../hooks/useForm';
import {useDispatch} from 'react-redux';
import {loginEmailPassword, loginFacebook, loginGoogle} from '../actions/actionLogin';

function Login() {

    const dispatch = useDispatch();

    const [ values, handleInputChange ] = useForm({
        email: '',
        password: ''
    })

    const {email,password} = values;

    const handleLogin = (e) => {
       e.preventDefault();
       dispatch(loginEmailPassword(email,password));
    }

    const handleGoogle = () => {
         dispatch(loginGoogle());
    }

    const handleFacebook = () => {
        dispatch(loginFacebook());
   }

    return (
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    autoComplete="true"
                    name="password"
                    value={password}
                    onChange={handleInputChange} />
            </Form.Group>
            <Button variant="primary" type="submit" className='button' href="./compras">
                Enviar
            </Button>

            <Container className="auth__social-networks">
                <Container
                    className="google-btn"
                    onClick={handleGoogle}

                >
                    <Container className="google-icon-wrapper" >
                        <img className="facebook-icon" width="40px" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                    </Container>
                </Container>
                <Container
                    className="google-btn"
                    onClick={handleFacebook}

                >
                    <Container className="google-icon-wrapper" style={{width:"50px", display:"flex"}}>
                        <img className="google-icon" width="40px" src="https://res.cloudinary.com/dky22nhv5/image/upload/v1632679406/facebook_gqfii0.png" alt="google button" />
                    </Container>
                </Container>
            </Container>
            <Link to="/registro" >Registrarse</Link>

        </Form>

    );
}

export default Login;