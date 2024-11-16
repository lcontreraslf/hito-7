import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaPizzaSlice, FaLock, FaSignOutAlt, FaSignInAlt, FaUserPlus, FaShoppingCart } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useCart } from '../context/CartContext';
import { useUser } from '../context/UserContext';

const NavigationBar = () => {
    const { totalCompra } = useCart(); 
    const { token, logout } = useUser();

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>
                <FaPizzaSlice /> Pizzería Mamma Mía
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    {/* Botón Home (siempre visible) */}
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>

                    {token ? (
                        <>
                            <Nav.Link as={Link} to="/profile">
                                <FaLock /> Profile
                            </Nav.Link>
                            <Nav.Link
                                onClick={logout} 
                                style={{ cursor: 'pointer' }}
                            >
                                <FaSignOutAlt /> Logout
                            </Nav.Link>
                        </>
                    ) : (
                        <>
                            <Nav.Link as={Link} to="/login">
                                <FaSignInAlt /> Login
                            </Nav.Link>
                            <Nav.Link as={Link} to="/registerPage">
                                <FaUserPlus /> Register
                            </Nav.Link>
                        </>
                    )}

                    <Nav.Link as={Link} to="/cart">
                        <FaShoppingCart /> Total: ${totalCompra.toLocaleString()}
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
