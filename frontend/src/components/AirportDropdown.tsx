import styled from "styled-components";
import Select from "react-select";
import { useEffect, useState } from "react";
export default function AirportDropdown() {
  const [airports, setAirports] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/airports")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.map((airport) => ({
          value: airport._id, // or airport.code if applicable
          label: airport.name, // assuming airport has a name field
        }));
        setAirports(formattedData);
      });
  }, []);

  return (
    <>
      <LandingDropdown placeholder="Search airport..." options={airports} />
    </>
  );
}

const LandingDropdown = styled(Select)`
  color: rgb(0, 0, 0);
  width: 100%;
`;
