import React from "react";
import { Button, UncontrolledCollapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Navi() {
  return (
    <Navbar color="dark" dark expand="md" className="text-light sticky-top">
      <NavbarBrand href="/">ChoosyHub</NavbarBrand>
      <NavbarToggler id="navbar-toggler" />
      <UncontrolledCollapse navbar toggler="#navbar-toggler">
        <Nav className="ml-auto" navbar>
          <NavItem className="py-1 px-1">
            <Input size="sm" className="rounded-pill" placeholder="Ürün ara..." />
          </NavItem>
          <NavItem className="py-1 px-1">
            <Button outline color="light" size="sm" className="rounded-pill">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </NavItem>
        </Nav>
      </UncontrolledCollapse>
    </Navbar>
  );
}
