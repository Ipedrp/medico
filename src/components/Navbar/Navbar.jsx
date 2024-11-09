import React, { useState } from 'react';
import { MenuItem, Menu, Container, Image, Icon, Button, Sidebar } from 'semantic-ui-react'
import { useMediaQuery } from 'react-responsive';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../../assets/logo.png"

function Navbar() {

    const [visible, setVisible] = useState(false);
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 768px)' });

    const toggleSidebar = () => {
        setVisible(!visible);
    };


    return (
        <div>
            {/* Desktop Navbar */}
            {isDesktopOrLaptop ? (
                <Menu className="nav" borderless>
                    <Container fluid>
                        {/* Logo à esquerda */}
                        <div className="navbar-logo">
                            <Image src={logo} size="tiny" />
                        </div>

                        {/* Texto de boas-vindas no centro */}
                        <div className="navbar-welcome-text">
                            <p>Serviço de Atendimento Móvel de Urgência</p>
                        </div>

                        {/* Ícone de logout à direita */}
                        <div className="navbar-signout">
                            <Link to="/">
                                <Icon name="sign-out" size="big" className="sign-out" />
                            </Link>
                        </div>
                    </Container>
                </Menu>
            ) : (
                // Mobile Navbar com Toggle
                <Menu className="mobile-menu-adm" >
                    <Container fluid>
                        <div className="navbar-logo">
                            <Image src={logo} size="tiny" />
                        </div>
                        <Menu.Menu position="right">
                            <Button icon onClick={toggleSidebar} className="toggle-button-adm">
                                <Icon name="align justify" />
                            </Button>
                        </Menu.Menu>
                    </Container>
                </Menu>
            )}

            {/* Sidebar para mobile */}
            <Sidebar
                as={Menu}
                animation="overlay"
                direction="left"
                inverted
                onHide={() => setVisible(false)}
                vertical
                visible={visible}
                className="sidebar-adm"
            >
                <Image src={logo} size="tiny" />
                <Link to="/home">
                    <Menu.Item as="a" onClick={() => setVisible(false)}>
                        Home
                    </Menu.Item>
                </Link>
                <Link to="/">
                    <Menu.Item as="a" onClick={() => setVisible(false)} position='left'>
                        <Icon name="sign-out" size="big" />
                    </Menu.Item>
                </Link>
            </Sidebar>
        </div>
    )
};

export default Navbar;