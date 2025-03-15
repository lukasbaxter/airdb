import styled from "styled-components";
import { useState } from "react";
import Airports from "./Airports";
import Aircrafts from "./Aircrafts";
import Users from "./Users";
import Roles from "./Roles";

export default function DatabaseViewport() {
  const [selectedComponent, setSelectedComponent] = useState("");

  return (
    <Container>
      <Button onClick={() => setSelectedComponent("Airports")}>Airports</Button>
      <Button onClick={() => setSelectedComponent("Aircrafts")}>
        Aircrafts
      </Button>
      <Button onClick={() => setSelectedComponent("Users")}>Users</Button>
      <Button onClick={() => setSelectedComponent("Roles")}>Roles</Button>
      <Viewport>
        {selectedComponent === "Airports" && <Airports />}
        {selectedComponent === "Aircrafts" && <Aircrafts />}
        {selectedComponent === "Users" && <Users />}
        {selectedComponent === "Roles" && <Roles />}
      </Viewport>
    </Container>
  );
}

const Container = styled.div``;
const Button = styled.button`
  margin: 4px;
`;
const Viewport = styled.div`
  display: flex;
  background: rgb(97, 97, 97);
`;
