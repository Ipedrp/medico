import React from "react";
import { Grid, Form, Button, Image, FormInput } from 'semantic-ui-react';
import { useMediaQuery } from 'react-responsive';
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.png"
import './Login.css';
function Login() {

    const navigate = useNavigate();
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const Entrar = () => {
        console.log("entrou")
    }

    return (
        <div>
            <Grid className="login-grid" columns={isMobile ? 1 : 2}>
                {!isMobile && (
                    <Grid.Column className="left-column" width={6}>
                        <Image src={logo} className="centered-image" />
                        <p className="centered-text">
                            Serviço de Atendimento  <br /> <span>Móvel de Urgência!</span>
                        </p>
                    </Grid.Column>
                )}

                <Grid.Column className="right-column" width={isMobile ? 16 : 10}>
                    <div className="form-container">
                        {isMobile && <Image src={Logo} className="centered-image-form" />}
                        <h4>Logar</h4>
                        <Form className="login-form">
                            <Form.Field>
                                <label>Email</label>
                                <FormInput
                                    placeholder="Digite seu email"
                                    icon={"mail"}
                                    iconPosition='left'
                                    name="email"
                                    type="email"
                                />
                            </Form.Field>
                            <Form.Field>
                                <label>Senha</label>
                                <FormInput
                                    placeholder="Digite sua senha"
                                    icon={"lock"}
                                    iconPosition='left'
                                    name="password"
                                    type="password"

                                />
                            </Form.Field>
                            <Link to='/home'>
                                <Button type="submit" className="btn-login" fluid onClick={Entrar}>
                                    Entrar
                                </Button>
                            </Link>
                        </Form>
                    </div>
                </Grid.Column>
            </Grid>
        </div>
    )
};

export default Login;