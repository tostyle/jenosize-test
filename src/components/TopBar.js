import React from "react";
import { Navbar, Nav, Form, FormControl } from "react-bootstrap";
import { Link } from "@reach/router";
import { usePlaceSearchContext } from "../pages/PlaceSearch/placeSearchModule";

function TopBar() {
  const { placeSearch, onChangePlaceSearch } = usePlaceSearchContext();
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Jenosize</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="mr-auto"
          style={{
            columnGap: "1rem",
          }}
        >
          <Nav.Item>
            <Link to="/">Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/search">Place Search</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/map">Map</Link>
          </Nav.Item>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={placeSearch || ""}
            onChange={onChangePlaceSearch}
          />
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default TopBar;
