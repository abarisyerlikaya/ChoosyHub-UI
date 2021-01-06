import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";

export default function Navi() {
  return (
    <Navbar color="dark" dark expand="md" className="text-light sticky-top">
      <NavbarBrand href="/">ChoosyHub</NavbarBrand>
    </Navbar>
  );
}
