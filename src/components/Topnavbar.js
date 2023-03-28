import React from "react";
import {
  Container,
  Navbar,
  Navlink,
  Button,
  NavDropdown,
  Form,
  Nav,
  FormControl,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { setLocalStorage } from "../utilities/storage";

import profile from "../images/profile.png";
import logo from "../images/logo.png";
import { useFetch } from "../utilities/apiFunctions/useFetch";
import Loading from "../components/Loading";

import { companyDataUrl } from "../utilities/constantUrls";

function Topnavbar() {




  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        className="top-nav ps-3 pe-3"
      >
        <Navbar.Brand>
          <NavLink to="/dashboard">
            <img src={logo} className="logo" />
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
          <Nav className="justify-content-end w-100">
         

            <div className="col col-lg-5">
              
            </div>

            {/*<MdOutlineNotificationsNone className='fs-4 mt-2 ms-3 me-4'/>*/}
            {/* <img src={profile} className="profile" />
                        <NavDropdown title="Admin" id="collasible-nav-dropdown" className='profile-drop'>
                            <i class="bi bi-caret-up-fill position-absolute fs-5 text-secondary"></i>
                            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                        </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Topnavbar;
