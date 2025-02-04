import React from "react";
import {
  Navbar,
  Nav,
  Container,
  NavDropdown,
  Button,
  Spinner,
} from "react-bootstrap";
import { AppRoutes } from "../shared/models/app.routes";
import { useTranslation } from "react-i18next";
import { useAuth0 } from "@auth0/auth0-react";
import "./NavBar.css";

const NavBar: React.FC = () => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect();
  };

  const handleRegister = async () => {
    await loginWithRedirect({
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin } });
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href={AppRoutes.Home} className="px-3">
              About
            </Nav.Link>
            <Nav.Link href={AppRoutes.Projects} className="px-3">
              Projects
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
